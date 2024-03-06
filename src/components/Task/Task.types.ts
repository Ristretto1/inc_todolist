import { ITask } from '../../common/types/task.types';

export interface ITaskProps {
  data: ITask;
  changeStatus: (id: number, value: boolean) => void;
}
