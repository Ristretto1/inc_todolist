import { IInputProps } from './types';
import s from './Input.module.css';
import { useState, KeyboardEvent, FC } from 'react';

export const Input: FC<IInputProps> = ({ onAddTask, ...props }) => {
  const [value, setValue] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value.trim()) {
        onAddTask({ isDone: false, title: value, id: Date.now() });
        setValue('');
      }
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onKeyDown={handleKeyDown}
      className={s.input}
      {...props}
    />
  );
};
