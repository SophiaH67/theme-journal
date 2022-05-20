import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../lib/app";
import { converter, Goal } from "../../lib/goals";
import GoalTableEntry from "./GoalTableEntry";

export default function Goals({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const daysDiff = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const goalsCollection = collection(firestore, "goals").withConverter(
    converter
  );

  const [goals, loading, error] = useCollection<Goal>(goalsCollection);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)} </div>;
  }

  return (
    <>
      {goals ? (
        <table className="text-md max-w-full border-collapse md:text-3xl">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th>Title</th>
              {Array.from(Array(daysDiff).keys()).map((day) => (
                <th
                  key={day}
                  className="w-10 border-x border-gray-200 p-1 md:w-20"
                >
                  {new Date(
                    startDate.getTime() + day * 24 * 60 * 60 * 1000
                  ).toLocaleDateString("en-US", { weekday: "short" })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {goals.docs.map((goal) => (
              <GoalTableEntry
                key={goal.id}
                goal={goal}
                days={daysDiff}
                startDate={startDate}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>No goals</div>
      )}
    </>
  );
}
