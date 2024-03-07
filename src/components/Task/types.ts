import { ITask } from '../../common/types/task.types';

export interface ITaskProps {
  task: ITask;
  onChangeStatus: (id: number, value: boolean) => void;
}
