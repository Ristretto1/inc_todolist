import { ITask } from '../../common/types/task.types';

export interface ITasksWrapperProps {
  tasks: ITask[];
  changeStatus: (id: number, value: boolean) => void;
  removeAllCompleted: () => void;
}
