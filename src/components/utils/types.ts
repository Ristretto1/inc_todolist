export enum Filter {
  ALL = "all",
  COMPLETED = "completed",
  ACTIVE = "active",
}

export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
}
