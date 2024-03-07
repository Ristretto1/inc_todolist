import { Task } from '../Task/Task';
import { ITasksWrapperProps } from './types';
import s from './TasksWrapper.module.css';
import { Footer } from '../Footer/Footer';
import { FilterEnum, ITask } from '../../common/types/task.types';
import { FC, useState } from 'react';

export const TasksWrapper: FC<ITasksWrapperProps> = ({ tasks, onChangeStatus, onRemoveAllCompleted }) => {
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.all);

  const handleFilterTasks = (filter: FilterEnum, tasks: ITask[]): ITask[] => {
    if (filter === 'active') return tasks.filter((t) => !t.isDone);
    if (filter === 'completed') return tasks.filter((t) => t.isDone);
    return tasks;
  };

  const handleChangeFilter = (filter: FilterEnum) => {
    setFilter(() => filter);
  };

  const filteredTasks = handleFilterTasks(filter, tasks);
  const mappedTasks = filteredTasks.map((t) => {
    return <Task key={t.id} task={t} onChangeStatus={onChangeStatus} />;
  });

  return (
    <div className={s.tasks_wrapper}>
      {tasks.length ? mappedTasks : <div className={s.template_task}>You don't have any tasks. Create first</div>}
      <Footer
        tasks={tasks}
        onRemoveAllCompleted={onRemoveAllCompleted}
        onChangeFilter={handleChangeFilter}
        filter={filter}
      />
    </div>
  );
};
