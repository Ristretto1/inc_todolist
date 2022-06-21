import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'ac422c12-b2f2-4703-8702-4c62b2f04639'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


export const todolistsAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>('/todo-lists')
    },
    createTodolists(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('/todo-lists', {title})
    },
    deleteTodolists(todolistID: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistID}`)
    },
    updateTodolists(todolistID: string, title: string) {
        return instance.put<ResponseType>(`/todo-lists/${todolistID}`, {title})
    },
}