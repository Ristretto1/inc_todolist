import { useState } from "react";
import "./App.css";
import { Todolist } from "./components/Todolist/Todolist";
import { Filter, ITask } from "./components/utils/types";

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ]);

  const [filter, setFilter] = useState<Filter>(Filter.ALL);

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = (): ITask[] => {
    if (filter === Filter.ACTIVE) {
      return tasks.filter((task) => !task.isDone);
    }
    if (filter === Filter.COMPLETED) {
      return tasks.filter((task) => task.isDone);
    }
    return tasks;
  };

  return (
    <div className="app">
      <Todolist
        title={"Kirill 1"}
        tasks={filteredTasks()}
        onRemoveTask={handleRemoveTask}
        filter={filter}
        onSetFilter={setFilter}
      />
    </div>
  );
};
