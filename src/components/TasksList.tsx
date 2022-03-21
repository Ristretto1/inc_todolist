import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../Todolist';

type TasksListPropsType = {
    removeTask: (taskId: string) => void
    tasks: Array<TaskType>
    changeStatus: (id: string, isDone: boolean) => void
}

export const TasksList: React.FC<TasksListPropsType> = (props) => {

    const onClickHandler = (id: string) => props.removeTask(id)
    const onChangeCheckBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(id, e.currentTarget.checked)
    }

    return (
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id} className={t.isDone ?'isDoneTask': ''}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => onChangeCheckBoxHandler(t.id, e)}
                        />
                        <span>{t.title}</span>
                        <Button name={'x'} callback={() => onClickHandler(t.id)}/>
                    </li>
                })
            }
        </ul>
    );
};

