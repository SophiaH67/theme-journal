import type { NextPage } from "next";
import Goals from "../components/goals/Goals";
import GoalsHelpTooltip from "../components/goals/GoalsHelpTooltip";
import GoalEditModal from "../components/goals/GoalEditModal";
import { useState } from "react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { NextSeo } from "next-seo";
import SEO from "../lib/seo";
dayjs.extend(weekOfYear);

const GoalsPage: NextPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [week, setWeek] = useState(dayjs().week());
  const [year, setYear] = useState(dayjs().year());

  let startDate = dayjs().year(year).week(week).startOf("week");
  let endDate = dayjs().year(year).week(week).endOf("week");

  return (
    <div className="mx-auto w-full max-w-max rounded-lg border border-gray-200 py-3 shadow-md md:px-6">
      <NextSeo {...SEO} />
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-700 md:text-base">
          Week of {startDate.format("MMMM D, YYYY")} -{" "}
          {endDate.format("MMMM D, YYYY")}
        </span>
        <div className="flex justify-center text-xs font-semibold text-gray-600 md:text-2xl">
          <button
            className="rounded-l-lg border border-gray-200 px-2 py-1 font-mono"
            onClick={() => setWeek(week - 1)}
          >
            -
          </button>
          <p className="m-0 border border-gray-200 p-2 text-center">
            Week {week}
          </p>
          <button
            className="rounded-r-lg border border-gray-200 px-2 py-1 font-mono"
            onClick={() => setWeek(week + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="mx-auto w-max">
        <Goals startDate={startDate} endDate={endDate} />
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
