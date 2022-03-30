import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
export type taskObjType = {
    [key: string]: Array<TaskType>
}


function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()


    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        { id: todolistId1, title: 'What to learn', filter: 'all' },
        { id: todolistId2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState<taskObjType>({
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

    function removeTask(todolistId: string, id: string) {

        setTasks({ ...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== id) })
    }

    function addTask(todolistId: string, title: string) {
        let newTask = { id: v1(), title: title, isDone: false };
        setTasks({ ...tasks, [todolistId]: [newTask, ...tasks[todolistId]] });
    }

    function changeStatus(todolistId: string, taskId: string, isDoneValue: boolean) {
        setTasks({ ...tasks, [todolistId]: tasks[todolistId].map(el => el.id === taskId ? { ...el, isDone: isDoneValue } : el) })
    }



    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistId ? { ...el, filter: value } : el))
    }
    const removeTDL = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
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
                        removeTDL={removeTDL}
                    />
                )
            })}


        </div>
    );
}

export default App;
