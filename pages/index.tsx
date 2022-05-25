import type { NextPage } from "next";
import Segment from "../components/home/Segment";

const Home: NextPage = () => {
  return (
    <div>
      <Segment image={"/goals_example.png"} left={false}>
        <div className="table-cell h-full align-middle">
          <h1 className="text-center text-4xl font-bold md:text-6xl">
            Goal Tracker
          </h1>
          <p className="text-center text-xl md:text-2xl">
            Track your goals and achieve them.
          </p>
        </div>
      </Segment>
    </div>
  );
};

export default Home;
