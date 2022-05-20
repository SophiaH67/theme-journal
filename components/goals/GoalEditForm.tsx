import { QueryDocumentSnapshot, updateDoc } from "firebase/firestore";
import { Goal } from "../../lib/goals";

export default function GoalEditForm({
  goal,
  children,
}: {
  goal?: QueryDocumentSnapshot<Goal>;
  children: JSX.Element;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = e.target as typeof e.target & {
      title: HTMLInputElement;
      description: HTMLTextAreaElement;
    };
    e.preventDefault();
    if (goal) {
      updateDoc(goal.ref, {
        title: target.title.value,
        description: target.description.value,
      });
    } else {
      // TODO: Create new goal
    }
  }

  return (
    <div className="w-full">
      <form className="mb-4 rounded bg-white " onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="title"
            type="text"
            placeholder="Title"
            value={goal?.data()?.title}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="description"
            placeholder="Description"
            value={goal?.data()?.description}
          />
        </div>
        <div className="mx-auto flex max-w-xs justify-between">
          {children}
          <button
            className="rounded border border-blue-500 bg-blue-700 bg-transparent py-2 px-4 font-semibold text-white hover:border-transparent hover:bg-blue-800 hover:text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
