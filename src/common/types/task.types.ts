export interface ITask {
  isDone: boolean;
  title: string;
  id: number;
}

export type IFilter = 'all' | 'active' | 'completed';
