import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from 'uuid';

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type FilterValueType = 'all'|'active'|'completed'

function App() {

    const todoListTitle: string = 'What to learn';
    const initTasks: Array<TaskType> = [
        {id: v1(), title: 'HTML/CSS', isDone: true},
        {id: v1(), title: 'JavaScript/ES6', isDone: true},
        {id: v1(), title: 'TypeScript', isDone: false},
        {id: v1(), title: 'React', isDone: false},
    ]
///////////////////////////////////////////////////////
    let [tasks, setTasks] = useState<Array<TaskType>>(initTasks)
    let [filter, setFilter] = useState<FilterValueType>('all')

    let tasksForTodoList = tasks;
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }

    const changeFilter = (value:FilterValueType) => {
        setFilter(value)
    }

    const removeTask = (id:string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }


    ////////////////////////////////////////////////////////
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksForTodoList}
                removeTask ={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
