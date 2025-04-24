import { useState } from "react";
import "./App.css";
import { Todolist } from "./components/Todolist/Todolist";
import { Filter, ITask } from "./components/utils/types";
import { v1 } from "uuid";

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [filter, setFilter] = useState<Filter>(Filter.ALL);

  const handleRemoveTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (title: string) => {
    setTasks([...tasks, { id: v1(), title, isDone: false }]);
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
        onAddTask={handleAddTask}
      />
    </div>
  );
};
