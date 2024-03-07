import { IFooterButtonProps } from './types';
import s from './FooterButton.module.css';
import { FC } from 'react';

export const FooterButton: FC<IFooterButtonProps> = ({ children, isActive, ...props }) => {
  return (
    <button className={`${s.footer_button} ${isActive ? s.active : ''}`} {...props}>
      {children}
    </button>
  );
};
