import { ChangeEvent, FC } from 'react';
import s from './Task.module.css';
import { ITaskProps } from './types';

export const Task: FC<ITaskProps> = ({ onChangeStatus, task }) => {
  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeStatus(task.id, e.currentTarget.checked);
  };

  return (
    <label className={`${s.task} ${task.isDone ? s.done : ''}`}>
      <input
        className={s.checkbox}
        checked={task.isDone}
        type='checkbox'
        name='task'
        id='task'
        onChange={handleChangeStatus}
      />
      {task.title}
    </label>
  );
};
