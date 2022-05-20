import { Goal, Progress } from "../../lib/goals";
import emoji from "react-easy-emoji";
import { QueryDocumentSnapshot, updateDoc } from "firebase/firestore";

export default function GoalTableEntry({
  goal,
  days,
  startDate,
}: {
  goal: QueryDocumentSnapshot<Goal>;
  days: number;
  startDate: Date;
}) {
  return (
    <tr key={goal.id}>
      <td className="p-2 md:p-4">{goal.data().title}</td>
      {Array.from(Array(days).keys()).map((day) => (
        <GoalTableTd
          key={day}
          goal={goal}
          date={new Date(startDate.getTime() + day * 24 * 60 * 60 * 1000)}
        />
      ))}
    </tr>
  );
}

function GoalTableTd({
  goal,
  date,
}: {
  goal: QueryDocumentSnapshot<Goal>;
  date: Date;
}) {
  const progress =
    goal.data().progress[date.toISOString().slice(0, 10)] ||
    Progress.NOT_STARTED;

  let emojiChar = "";
  switch (progress) {
    case Progress.NOT_STARTED:
      emojiChar = "☠️";
      break;
    case Progress.IN_PROGRESS:
      emojiChar = "🚀";
      break;
    case Progress.COMPLETED:
      emojiChar = "🎉";
      break;
  }

  async function cycleEmoji() {
    let newProgress = progress;
    switch (progress) {
      case Progress.NOT_STARTED:
        newProgress = Progress.IN_PROGRESS;
        break;
      case Progress.IN_PROGRESS:
        newProgress = Progress.COMPLETED;
        break;
      case Progress.COMPLETED:
        newProgress = Progress.NOT_STARTED;
        break;
    }
    await updateDoc(goal.ref, {
      progress: {
        ...goal.data().progress,
        [date.toISOString().slice(0, 10)]: newProgress,
      },
    });
  }

  return (
    <td>
      {emoji(emojiChar, {
        size: "72x72",
        ext: ".png",
        props: {
          style: { width: "" },
          className:
            "m-auto cursor-pointer hover:bg-gray-200 m-1 w-8 h-8 md:w-16 md:h-16",
          onClick: cycleEmoji,
        },
      })}
    </td>
  );
}
