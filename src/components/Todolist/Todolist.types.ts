import { Filter, ITask } from "../utils/types";

export interface ITodolistProps {
  title: string;
  tasks: ITask[];
  onRemoveTask: (id: string) => void;
  filter: Filter;
  onSetFilter: (filter: Filter) => void;
  onAddTask: (title: string) => void;
}
