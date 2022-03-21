import React from 'react';
import {FilterValuesType} from './App';
import {InputBlock} from './components/InputBlock';
import {TasksList} from './components/TasksList';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    titleTodolist: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    title: string
    setTitle: (title: string) => void
    changeStatus: (id: string, isDone: boolean) => void
}

export const Todolist: React.FC<PropsType> = ({title, setTitle, ...props}) => {


    const addTask = () => {
        props.addTask(title.trim());
        setTitle('');
    }


    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');

    return <div>
        <h3>{props.titleTodolist}</h3>

        <InputBlock title={title} addTask={addTask} setTitle={setTitle}/>

        <TasksList tasks={props.tasks} removeTask={props.removeTask} changeStatus={props.changeStatus}/>

        <div>
            
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
