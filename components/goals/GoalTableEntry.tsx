import { Goal, Progress } from "../../lib/goals";
import emoji from "react-easy-emoji";
import { QueryDocumentSnapshot, updateDoc } from "firebase/firestore";
import { useState } from "react";
import GoalEditModal from "./GoalEditModal";
import { Dayjs } from "dayjs";
import GoalTableTd from "./GoalTableTd";

export default function GoalTableEntry({
  goal,
  days,
  startDate,
}: {
  goal: QueryDocumentSnapshot<Goal>;
  days: number;
  startDate: Dayjs;
}) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  return (
    <tr key={goal.id}>
      <GoalEditModal
        goal={goal}
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
      />
      <td
        className="cursor-pointer p-2 md:p-4"
        onClick={() => setEditModalOpen(true)}
      >
        {goal.data().title}
      </td>
      {Array.from(Array(days).keys()).map((day) => (
        <GoalTableTd key={day} goal={goal} date={startDate.add(day, "day")} />
      ))}
    </tr>
  );
}
