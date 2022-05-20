import emoji from "react-easy-emoji";

export default function GoalsHelpTooltip() {
  return (
    <div className="md:text-md mt-4 flex justify-center text-xs text-gray-600">
      <span className="mx-4">
        {emoji("☠️", {
          props: { className: "inline" },
          size: "72x72",
          ext: ".png",
        })}
        : Not Started
      </span>
      <span className="mx-4">
        {emoji("🚀", {
          props: { className: "inline" },
          size: "72x72",
          ext: ".png",
        })}
        : In Progress
      </span>
      <span className="mx-4">
        {emoji("🎉", {
          props: { className: "inline" },
          size: "72x72",
          ext: ".png",
        })}
        : Completed
      </span>
    </div>
  );
}
