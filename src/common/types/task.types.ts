export interface ITask {
  isDone: boolean;
  title: string;
  id: number;
}

export enum FilterEnum {
  all = 'all',
  active = 'active',
  completed = 'completed'
}
