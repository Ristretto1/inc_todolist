import React, {useEffect, useState} from 'react'
import {taskAPI, TaskType, todolistsAPI, TodolistType} from '../api/todolists-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<Array<TodolistType>>([])

    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistsAPI.getTodolists()
            .then(res => setState(res.data))
    }, [])
    return <div>
        {JSON.stringify(state)}
    </div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')

    const onClickHandler = () => {
        todolistsAPI.createTodolists(title)
            .then(res => setState(res.data))
    }

    return <div>
        <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>Create</button>
        {JSON.stringify(state)}
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')

    const onClickHandler = () => {
        todolistsAPI.deleteTodolists(todolistId)
            .then(res => setState(res.data))
    }

    return <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>Delete</button>
        {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const onClickHandler = () => {
        todolistsAPI.updateTodolists(todolistId, title)
            .then(res => setState(res.data))
    }

    return <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
        <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>Update</button>
        {JSON.stringify(state)}</div>
}
//-----------------------------
//-----------------------------
//-----------------------------
//-----------------------------




export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')

    const onClickHandler = () => {
        debugger
        taskAPI.getTasks(todolistId)
            .then(res => setState(res.data))
    }

    return <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>Get</button>
        {JSON.stringify(state)}
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')

    const onClickHandler = () => {
        taskAPI.createTask(todolistId, title)
            .then(res => setState(res.data))
    }

    return <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
        <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>Create</button>
        {JSON.stringify(state)}
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')

    const onClickHandler = () => {
        taskAPI.deleteTask(todolistId, taskId)
            .then(res => setState(res.data))
    }

    return <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
        <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>Delete</button>
        {JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const [description, setDescription] = useState<string>('')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')

    const onClickHandler = () => {
        taskAPI.updateTask(todolistId, taskId, {
            description: description,
            status: 0,
            deadline: '',
            priority: 2,
            startDate: '', 
            title: title
        })
            .then(res => setState(res.data))
    }

    return <div>
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
        <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
        <input placeholder={'description'} value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
        <input placeholder={'status'} value={status} onChange={(e) => setStatus(+e.currentTarget.value)}/>
        <input placeholder={'priority'} value={priority} onChange={(e) => setPriority(+e.currentTarget.value)}/>
        <input placeholder={'startDate'} value={startDate} onChange={(e) => setStartDate(e.currentTarget.value)}/>
        <input placeholder={'deadline'} value={deadline} onChange={(e) => setDeadline(e.currentTarget.value)}/>

        <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>Update</button>
        {JSON.stringify(state)}</div>
}

