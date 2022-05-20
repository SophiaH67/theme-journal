import type { NextPage } from "next";
import Goals from "../components/goals/Goals";

const GoalsPage: NextPage = () => {
  function getFirstDayOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  const startOfWeek = getFirstDayOfWeek(new Date());
  const endOfWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000);

  return <Goals startDate={startOfWeek} endDate={endOfWeek} />;
};

export default GoalsPage;
