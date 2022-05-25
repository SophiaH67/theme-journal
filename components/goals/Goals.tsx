import {
  collection,
  orderBy,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../lib/app";
import { converter, Goal } from "../../lib/goals";
import GoalTableEntry from "./GoalTableEntry";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function Goals({
  startDate,
  endDate,
}: {
  startDate: Dayjs;
  endDate: Dayjs;
}) {
  const [user] = useAuthState(auth);
  const [userId, setUserId] = useState(
    typeof window !== "undefined" ? localStorage.getItem("userId") || "" : ""
  );

  if (user) {
    if (user.uid !== userId) {
      localStorage.setItem("userId", user.uid);
      setUserId(user.uid);
    }
  }

  const goalsCollection = collection(firestore, "goals").withConverter(
    converter
  );

  const [fGoals, loading, error] = useCollection<Goal>(
    query(goalsCollection, where("owner", "==", userId))
  );

  const mockGoals = { docs: [] } as any as QuerySnapshot<Goal>;
  const goals: QuerySnapshot<Goal> = loading ? mockGoals : fGoals || mockGoals;

  if (error) {
    return <div>Error: {JSON.stringify(error)} </div>;
  }

  // sort goals by title alphabetically
  const sortedGoals = goals?.docs.sort((a, b) =>
    a.data().title.localeCompare(b.data().title)
  );

  const daysDiff = endDate.diff(startDate, "days");

  return (
    <>
      <table
        className="max-w-full border-collapse text-sm md:text-3xl"
        cellPadding="4rem"
      >
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th>Title</th>
            {Array.from(Array(daysDiff).keys()).map((day) => (
              <th
                key={day}
                className="w-10 border-x border-gray-200 p-1 md:w-20"
              >
                {startDate.add(day, "day").format("ddd")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedGoals?.map((goal) => (
            <GoalTableEntry
              key={goal.id}
              goal={goal}
              days={daysDiff}
              startDate={startDate}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
