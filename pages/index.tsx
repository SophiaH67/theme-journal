import type { NextPage } from "next";
import Segment from "../components/home/Segment";
import goalsExample from "../components/home/goals_example.png";

const Home: NextPage = () => {
  return (
    <div>
      <Segment image={goalsExample} left={false}>
        <h1 className="table-cell h-[14rem] text-center align-middle text-4xl font-bold md:text-6xl">
          Goal Markers
        </h1>
      </Segment>
    </div>
  );
};

export default Home;
