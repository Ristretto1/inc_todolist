export interface ITodolistProps {
  title: string;
  tasks: ITodolistItem[];
}

interface ITodolistItem {
  id: number;
  title: string;
  isDone: boolean;
}
