import type { NextPage } from "next";
import Goals from "../components/goals/Goals";
import GoalsHelpTooltip from "../components/goals/GoalsHelpTooltip";
import GoalEditModal from "../components/goals/GoalEditModal";
import { useState } from "react";

const GoalsPage: NextPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  function getFirstDayOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  const startOfWeek = getFirstDayOfWeek(new Date());
  const endOfWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000);

  return (
    <div className="mx-auto w-full max-w-max rounded-lg border border-gray-200 py-3 shadow-md md:px-6">
      <div className="mx-auto w-max">
        <Goals startDate={startOfWeek} endDate={endOfWeek} />
      </div>
      <GoalsHelpTooltip />
      <button
        className="my-2 w-full rounded border bg-blue-500 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-600 md:text-2xl"
        onClick={() => setCreateModalOpen(true)}
      >
        Create Goal
      </button>
      <GoalEditModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
    </div>
  );
};

export default GoalsPage;
