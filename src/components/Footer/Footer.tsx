import { IFooterProps } from './Footer.types';
import s from './Footer.module.css';
import { FooterButton } from './FooterButton/FooterButton';

export const Footer = ({ tasks, removeAllCompleted, changeFilter, filter }: IFooterProps) => {
  const completedTasks = tasks.filter((el) => el.isDone);

  return (
    <div className={s.footer}>
      <span>{completedTasks.length} items left</span>
      <div className={s.filters_wrapper}>
        <FooterButton isActive={filter === 'all'} onClick={() => changeFilter('all')}>
          All
        </FooterButton>
        <FooterButton isActive={filter === 'active'} onClick={() => changeFilter('active')}>
          Active
        </FooterButton>
        <FooterButton isActive={filter === 'completed'} onClick={() => changeFilter('completed')}>
          Complete
        </FooterButton>
      </div>
      <FooterButton disabled={completedTasks.length === 0} onClick={removeAllCompleted}>
        Clear Completed
      </FooterButton>
    </div>
  );
};
