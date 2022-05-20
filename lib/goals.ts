import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export interface Goal {
  id: string;
  title: string;
  halfCircle: string;
  fullCircle: string;
  description: string;
  progress: { [key: string]: Progress }; // key is yyyy-mm-dd
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
      halfCircle: goal.halfCircle,
      fullCircle: goal.fullCircle,
      description: goal.description,
      progress: goal.progress,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>): Goal => {
    const data = snapshot.data();
    return {
      id: data.id,
      title: data.title,
      halfCircle: data.halfCircle,
      fullCircle: data.fullCircle,
      description: data.description,
      progress: data.progress,
    };
  },
};
