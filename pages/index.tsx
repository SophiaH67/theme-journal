import type { NextPage } from "next";
import Segment from "../components/home/Segment";

const Home: NextPage = () => {
  return (
    <div>
      <Segment image={"/goals_example.png"} left={false}>
        <h1 className="table-cell h-full text-center align-middle text-4xl font-bold md:text-6xl">
          Goal Markers
        </h1>
      </Segment>
    </div>
  );
};

export default Home;
