import { IFilter, ITask } from '../../common/types/task.types';

export interface IFooterProps {
  tasks: ITask[];
  removeAllCompleted: () => void;
  changeFilter: (filter: IFilter) => void;
  filter: IFilter;
}
