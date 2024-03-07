import { ButtonHTMLAttributes } from 'react';

export interface IFooterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}
