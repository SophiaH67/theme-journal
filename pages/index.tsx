import type { NextPage } from "next";
import Segment from "../components/home/Segment";
import SegmentDescription from "../components/home/SegmentDescription";

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
      <SegmentDescription left={false}>
        With Goal Tracker, you can track your goals and achieve them by setting
        small goals for yourself every day. Goal Tracker will help you to
        achieve your goals by tracking your progress and giving you a visual
        representation of how you are doing.
      </SegmentDescription>
      <Segment image={"/not_found.png"} left={true}>
        <div className="table-cell h-full align-middle">
          <h1 className="text-center text-4xl font-bold md:text-6xl">Diary</h1>
          <p className="text-center text-xl md:text-2xl">
            Write down your thoughts and feelings.
          </p>
        </div>
      </Segment>
      <SegmentDescription left={true}>
        With this Diary, you can write down your daily thoughts and feelings. It
        supports a nice what you see is what you get editor to quickly sketch
        your thoughts and feelings into words.
      </SegmentDescription>
    </div>
  );
};

export default Home;
