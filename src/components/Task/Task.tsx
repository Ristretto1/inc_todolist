import { ChangeEvent } from 'react';
import s from './Task.module.css';
import { ITaskProps } from './Task.types';

export const Task = ({ changeStatus, data }: ITaskProps) => {
  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeStatus(data.id, e.currentTarget.checked);
  };

  return (
    <label className={`${s.task} ${data.isDone ? s.done : ''}`}>
      <input
        className={s.checkbox}
        checked={data.isDone}
        type='checkbox'
        name='task'
        id='task'
        onChange={changeStatusHandler}
      />
      {data.title}
    </label>
  );
};
