import { FC, useState } from 'react';
import { Input } from '../components/Input/Input';
import s from './App.module.css';
import { ITask } from '../common/types/task.types';
import { TasksWrapper } from '../components/TasksWrapper/TasksWrapper';

const App: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (task: ITask) => {
    setTasks((state) => [task, ...state]);
  };

  const handleChangeStatus = (id: number, value: boolean) => {
    setTasks((state) => state.map((el) => (el.id === id ? { ...el, isDone: value } : el)));
  };

  const handleRemoveAllCompleted = () => {
    setTasks((state) => state.filter((el) => !el.isDone));
  };

  return (
    <div className={s.app}>
      <Input placeholder='Create a new todo…' onAddTask={handleAddTask} />
      <TasksWrapper tasks={tasks} onChangeStatus={handleChangeStatus} onRemoveAllCompleted={handleRemoveAllCompleted} />
    </div>
  );
};

export default App;
