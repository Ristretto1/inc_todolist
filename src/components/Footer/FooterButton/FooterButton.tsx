import { IFooterButtonProps } from './FooterButton.types';
import s from './FooterButton.module.css';

export const FooterButton = ({ children, isActive, ...props }: IFooterButtonProps) => {
  return (
    <button className={`${s.footer_button} ${isActive ? s.active : ''}`} {...props}>
      {children}
    </button>
  );
};
