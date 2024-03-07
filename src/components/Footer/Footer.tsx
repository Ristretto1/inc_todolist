import { IFooterProps } from './types';
import s from './Footer.module.css';
import { FooterButton } from './FooterButton/FooterButton';
import { FC } from 'react';
import { FilterEnum } from '../../common/types/task.types';

export const Footer: FC<IFooterProps> = ({ tasks, onRemoveAllCompleted, onChangeFilter, filter }) => {
  const completedTasks = tasks.filter((el) => el.isDone);

  return (
    <div className={s.footer}>
      <span>{completedTasks.length} items left</span>
      <div className={s.filters_wrapper}>
        <FooterButton isActive={filter === FilterEnum.all} onClick={() => onChangeFilter(FilterEnum.all)}>
          All
        </FooterButton>
        <FooterButton isActive={filter === FilterEnum.active} onClick={() => onChangeFilter(FilterEnum.active)}>
          Active
        </FooterButton>
        <FooterButton isActive={filter === FilterEnum.completed} onClick={() => onChangeFilter(FilterEnum.completed)}>
          Complete
        </FooterButton>
      </div>
      <FooterButton disabled={completedTasks.length === 0} onClick={onRemoveAllCompleted}>
        Clear Completed
      </FooterButton>
    </div>
  );
};
