import { useState } from 'react';
import { Input } from '../components/Input/Input';
import s from './App.module.css';
import { ITask } from '../common/types/task.types';
import { TasksWrapper } from '../components/TasksWrapper/TasksWrapper';

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (task: ITask) => {
    setTasks((state) => [task, ...state]);
  };

  const changeStatus = (id: number, value: boolean) => {
    setTasks((state) => state.map((el) => (el.id === id ? { ...el, isDone: value } : el)));
  };

  const removeAllCompleted = () => {
    setTasks((state) => state.filter((el) => !el.isDone));
  };

  return (
    <div className={s.app}>
      <Input placeholder='Create a new todo…' addTask={addTask} />
      <TasksWrapper tasks={tasks} changeStatus={changeStatus} removeAllCompleted={removeAllCompleted} />
    </div>
  );
};

export default App;
