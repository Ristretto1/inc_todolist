import React from 'react';
import {FilterValueType, TaskType} from './App';
import TodoListHeader from './TodoListHeader';
import Button from './Button';
import TasksList from './TasksList';

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void
    changeFilter: (filter: FilterValueType) => void
}

const TodoList: React.FC<TodoListPropsType> = (props) => {
    return (
        <div>
            <div>
                <TodoListHeader title={props.title}/>
                <div>
                    <input/>
                    {/*<Button name={'+'} callBack={}/>*/}
                    <button>+</button>
                </div>

                <TasksList
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                />

                <div>
                    <Button name={'All'} callBack={() => props.changeFilter('all')}/>
                    <Button name={'Active'} callBack={() => props.changeFilter('active')}/>
                    <Button name={'Completed'} callBack={() => props.changeFilter('completed')}/>
                </div>
            </div>
        </div>
    );
};

export default TodoList;