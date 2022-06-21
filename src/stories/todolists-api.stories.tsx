import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY' : 'ac422c12-b2f2-4703-8702-4c62b2f04639'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then(res => setState(res.data))

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'yo'} , settings)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    const todolistId = 'ddc56194-7b3a-4f34-97ab-ff2c5fab0a39'

    useEffect(() => {
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    const todolistId = 'a231cdef-3c40-4629-8907-3d591f512735'

    useEffect(() => {
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'yoYo'} , settings)
            .then(res => setState(res.data))
            }, [])

    return <div>{JSON.stringify(state)}</div>
}

