import { InputHTMLAttributes } from 'react';
import { ITask } from '../../common/types/task.types';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  addTask: (task: ITask) => void;
}
