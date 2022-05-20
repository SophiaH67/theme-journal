import { QueryDocumentSnapshot } from "firebase/firestore";
import { useState } from "react";
import ReactModal from "react-modal";
import { Goal } from "../../lib/goals";
import GoalEditForm from "./GoalEditForm";

export default function GoalEditModal({
  goal,
  open,
  onClose,
}: {
  goal?: QueryDocumentSnapshot<Goal>;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      closeTimeoutMS={200}
      // style="position: absolute; inset: 40px; border: 1px solid rgb(204, 204, 204); background: rgb(255, 255, 255); overflow: auto; border-radius: 4px; outline: none; padding: 20px;"
      className="absolute top-1/2 left-1/2 w-full max-w-3xl -translate-y-1/2 -translate-x-1/2 transform rounded-lg border bg-white p-3 shadow-md outline-none md:px-6"
    >
      <div className="mx-auto w-full p-1">
        <h1 className="text-3xl text-gray-700">
          {goal ? "Edit" : "Create"} Goal
        </h1>
        <div className="w-full">
          <GoalEditForm goal={goal} afterSubmit={onClose}>
            <button
              className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </GoalEditForm>
        </div>
      </div>
    </ReactModal>
  );
}
