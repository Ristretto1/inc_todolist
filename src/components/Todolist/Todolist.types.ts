import { Filter, ITask } from "../utils/types";

export interface ITodolistProps {
  title: string;
  tasks: ITask[];
  onRemoveTask: (id: number) => void;
  filter: Filter;
  onSetFilter: (filter: Filter) => void;
}
