import {
  addDoc,
  collection,
  QueryDocumentSnapshot,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../lib/app";
import { Goal } from "../../lib/goals";

export default function GoalEditForm({
  goal,
  children,
  afterSubmit,
}: {
  goal?: QueryDocumentSnapshot<Goal>;
  children: JSX.Element;
  afterSubmit?: () => void;
}) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: HTMLInputElement;
      description: HTMLTextAreaElement;
    };
    if (goal) {
      await updateDoc(goal.ref, {
        title: target.title.value,
        description: target.description.value,
      });
    } else {
      await addDoc(collection(firestore, "goals"), {
        title: target.title.value,
        description: target.description.value,
        progress: {},
      });
    }
    afterSubmit?.();
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
            defaultValue={goal?.data()?.title}
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
            defaultValue={goal?.data()?.description}
          />
        </div>
        <div className="mx-auto flex max-w-xs justify-between">
          {children}
          {goal && (
            <button
              className="rounded border border-red-500 bg-red-700 bg-transparent py-2 px-4 font-semibold text-white hover:border-transparent hover:bg-red-800 hover:text-white"
              type="submit"
            >
              Delete
            </button>
          )}
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
