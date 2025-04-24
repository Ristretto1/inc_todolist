import { KeyboardEvent, FC, useRef } from "react";
import { ITodolistProps } from "./Todolist.types";
import { Button } from "../Button/Button";
import { Filter } from "../utils/types";

export const Todolist: FC<ITodolistProps> = ({
  title,
  tasks,
  onRemoveTask,
  onSetFilter,
  onAddTask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    if (inputRef.current) {
      onAddTask(inputRef.current.value.trim());
      inputRef.current.value = "";
    }
  };

  const handleAddTaskOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input ref={inputRef} onKeyDown={handleAddTaskOnEnter} />
        <Button onClick={handleAddTask}>+</Button>
      </div>

      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => {}}
              />
              <span>{task.title}</span>
              <Button onClick={() => onRemoveTask(task.id)}>x</Button>
            </li>
          ))}
        </ul>
      ) : (
        "Задач нет"
      )}

      <div>
        <Button onClick={() => onSetFilter(Filter.ALL)}>All</Button>
        <Button onClick={() => onSetFilter(Filter.ACTIVE)}>Active</Button>
        <Button onClick={() => onSetFilter(Filter.COMPLETED)}>Completed</Button>
      </div>
    </div>
  );
};
