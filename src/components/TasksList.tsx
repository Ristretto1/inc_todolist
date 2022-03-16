import React from 'react';
import {TaskType} from '../App';
import Button from './Button';

type TasksListPropsType = {
    tasks: Array<TaskType>,
    removeTask: (id: string) => void
}

const TasksList: React.FC<TasksListPropsType> = (props) => {


    let tasksList = props.tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <Button name={'X'} callBack={() => props.removeTask(t.id)}/>
            </li>
        )
    });

    return (
        <ul>
            {tasksList}
        </ul>
    );
};

export default TasksList;