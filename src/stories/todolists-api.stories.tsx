import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistsAPI} from '../api/todolists-api';

export default {
    title: 'API'
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistsAPI.getTodolists()
            .then(res => setState(res.data))

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolists('123')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    const todolistId = 'a231cdef-3c40-4629-8907-3d591f512735'

    useEffect(() => {
        todolistsAPI.deleteTodolists(todolistId)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    const todolistId = '9dd13f2b-55eb-4d05-8186-4090923a3064'

    useEffect(() => {
        todolistsAPI.updateTodolists(todolistId, '456')
            .then(res => setState(res.data))
            }, [])

    return <div>{JSON.stringify(state)}</div>
}

