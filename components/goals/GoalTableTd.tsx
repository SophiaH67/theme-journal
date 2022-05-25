import { Dayjs } from "dayjs";
import { QueryDocumentSnapshot, updateDoc } from "firebase/firestore";
import emoji from "react-easy-emoji";
import { Goal, Progress } from "../../lib/goals";
import { useReward } from "react-rewards";
import { renderToString } from "react-dom/server";

export default function GoalTableTd({
  goal,
  date,
}: {
  goal: QueryDocumentSnapshot<Goal>;
  date: Dayjs;
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

  const emojiElement = emoji(
    progress === Progress.COMPLETED
      ? "☠️"
      : progress === Progress.IN_PROGRESS
      ? "🎉"
      : "🚀"
  );

  const { reward } = useReward("rewardId", "emoji", {
    elementCount: 24,
    elementSize: 64,
    emoji: [renderToString(emojiElement)],
  });

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
    reward();
    await updateDoc(goal.ref, {
      progress: {
        ...goal.data().progress,
        [date.toISOString().slice(0, 10)]: newProgress,
      },
    });
  }

  return (
    <td>
      <span id="rewardId" className="pointer-events-none" />
      {emoji(emojiChar, {
        size: "72x72",
        ext: ".png",
        props: {
          style: { width: "" },
          className:
            "m-auto cursor-pointer hover:bg-gray-200 m-1 w-8 h-8 md:w-16 md:h-16",
          onClick: cycleEmoji,
        },
        protocol: "https",
      })}
    </td>
  );
}
