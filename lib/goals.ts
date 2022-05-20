import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export interface Goal {
  id: string;
  title: string;
  description: string;
  progress: { [key: string]: Progress }; // key is yyyy-mm-dd
  owner: string; // user id
}

export enum Progress {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
}

export const converter = {
  toFirestore: (goal: Goal): DocumentData => {
    return {
      id: goal.id,
      title: goal.title,
      description: goal.description,
      progress: goal.progress,
      owner: goal.owner,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>): Goal => {
    const data = snapshot.data();
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      progress: data.progress,
      owner: data.owner,
    };
  },
};
