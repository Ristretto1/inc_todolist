import React, {useEffect, useState} from 'react'
import {todolistsAPI, TodolistType} from '../api/todolists-api';

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

