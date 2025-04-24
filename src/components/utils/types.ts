export enum Filter {
  ALL = "all",
  COMPLETED = "completed",
  ACTIVE = "active",
}

export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}
