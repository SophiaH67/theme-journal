import type { NextPage } from "next";
import Goals from "../components/goals/Goals";
import GoalsHelpTooltip from "../components/goals/GoalsHelpTooltip";

const GoalsPage: NextPage = () => {
  function getFirstDayOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  const startOfWeek = getFirstDayOfWeek(new Date());
  const endOfWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000);

  return (
    <div className="mx-auto w-full max-w-3xl rounded-lg border border-gray-200 py-3 shadow-md md:px-6">
      <div className="mx-auto w-max">
        <Goals startDate={startOfWeek} endDate={endOfWeek} />
        <GoalsHelpTooltip />
      </div>
    </div>
  );
};

export default GoalsPage;
