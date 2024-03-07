import { ITask } from '../../common/types/task.types';

export interface ITasksWrapperProps {
  tasks: ITask[];
  onChangeStatus: (id: number, value: boolean) => void;
  onRemoveAllCompleted: () => void;
}
