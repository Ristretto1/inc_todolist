import { IInputProps } from './Input.types';
import s from './Input.module.css';
import { useState, KeyboardEvent } from 'react';

export const Input = ({ addTask, ...props }: IInputProps) => {
  const [value, setValue] = useState<string>('');

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value.trim()) {
        addTask({ isDone: false, title: value, id: Date.now() });
        setValue('');
      }
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onKeyDown={onKeyDownHandler}
      className={s.input}
      {...props}
    />
  );
};
