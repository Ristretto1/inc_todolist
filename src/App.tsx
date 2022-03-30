import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}


function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()


    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        { id: todolistId1, title: 'What to learn', filter: 'all' },
        { id: todolistId2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState({
        [todolistId1]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: false },
            { id: v1(), title: 'Rest API', isDone: false },
            { id: v1(), title: 'GraphQL', isDone: false },
        ],
        [todolistId2]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: false },
            { id: v1(), title: 'Rest API', isDone: false },
            { id: v1(), title: 'GraphQL', isDone: false },
        ],
    });
    // let [filter, setFilter] = useState<FilterValuesType>('all');


    function removeTask(todolistId: string, id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        setTasks({ ...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== id) })
    }

    function addTask(title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        // setTasks([...tasks]);
    }


    // let tasksForTodolist = tasks;
    // if (filter === 'active') tasksForTodolist = tasks.filter(t => !t.isDone);
    // if (filter === 'completed') tasksForTodolist = tasks.filter(t => t.isDone);


    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistId ? { ...el, filter: value } : el))
    }


    return (
        <div className="App">
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id];
                if (el.filter === 'active') tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                if (el.filter === 'completed') tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                return (
                    <Todolist
                        key={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                        todolistId={el.id}
                    />
                )
            })}


        </div>
    );
}

export default App;
