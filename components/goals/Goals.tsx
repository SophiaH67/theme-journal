import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../lib/app";

export default function Goals({ startDate }: { startDate: Date }) {
  const goalsCollection = collection(firestore, "goals");
  const [goals, loading, error] = useCollection(goalsCollection);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)} </div>;
  }

  return (
    <div>
      {goals ? (
        goals.docs.map((goal) => <div key={goal.id}>{goal.data().title}</div>)
      ) : (
        <div>No goals</div>
      )}
    </div>
  );
}
