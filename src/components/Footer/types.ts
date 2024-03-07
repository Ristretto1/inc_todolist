import { FilterEnum, ITask } from '../../common/types/task.types';

export interface IFooterProps {
  tasks: ITask[];
  onRemoveAllCompleted: () => void;
  onChangeFilter: (filter: FilterEnum) => void;
  filter: FilterEnum;
}
