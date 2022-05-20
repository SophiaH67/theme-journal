import type { NextPage } from "next";
import Goals from "../components/goals/Goals";

const GoalsPage: NextPage = () => {
  const today = new Date(new Date().setHours(0, 0, 0, 0));

  return <Goals startDate={today} />;
};

export default GoalsPage;
