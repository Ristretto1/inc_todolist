import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export type FilterValueType = 'all'|'active'|'completed'

function App() {

    const todoListTitle: string = 'What to learn';
    const initTasks: Array<TaskType> = [
        {id: 1, title: 'HTML/CSS', isDone: true},
        {id: 2, title: 'JavaScript/ES6', isDone: true},
        {id: 3, title: 'TypeScript', isDone: false},
        {id: 4, title: 'React', isDone: false},
    ]
///////////////////////////////////////////////////////
    let [tasks, setTasks] = useState(initTasks)
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

    const removeTask = (id:number) => {
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
