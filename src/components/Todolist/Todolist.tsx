import { FC } from "react";
import { ITodolistProps } from "./Todolist.types";
import { Button } from "../Button/Button";

export const Todolist: FC<ITodolistProps> = ({ title, tasks }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button>+</Button>
      </div>

      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
            </li>
          ))}
        </ul>
      ) : (
        "Задач нет"
      )}

      <div>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
    </div>
  );
};
