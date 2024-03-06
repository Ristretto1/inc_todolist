import { Task } from '../Task/Task';
import { ITasksWrapperProps } from './TasksWrapper.types';
import s from './TasksWrapper.module.css';
import { Footer } from '../Footer/Footer';
import { IFilter, ITask } from '../../common/types/task.types';
import { useState } from 'react';

export const TasksWrapper = ({ tasks, changeStatus, removeAllCompleted }: ITasksWrapperProps) => {
  const [filter, setFilter] = useState<IFilter>('all');

  const filterTasks = (filter: IFilter, tasks: ITask[]): ITask[] => {
    if (filter === 'active') return tasks.filter((t) => !t.isDone);
    if (filter === 'completed') return tasks.filter((t) => t.isDone);
    return tasks;
  };

  const changeFilter = (filter: IFilter) => {
    setFilter(() => filter);
  };

  const filteredTasks = filterTasks(filter, tasks);

  return (
    <div className={s.tasks_wrapper}>
      {filteredTasks.map((t) => {
        return <Task key={t.id} data={t} changeStatus={changeStatus} />;
      })}
      <Footer tasks={tasks} removeAllCompleted={removeAllCompleted} changeFilter={changeFilter} filter={filter} />
    </div>
  );
};
