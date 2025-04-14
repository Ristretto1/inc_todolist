import "./App.css";
import { Todolist } from "./components/Todolist/Todolist";

export const App = () => {
  const tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ];

  return (
    <div className="app">
      <Todolist title={"Kirill 1"} tasks={tasks1} />
    </div>
  );
};
