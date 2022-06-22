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


//----------------------------
//----------------------------
//----------------------------


export type TaskType = {
    addedDate: string
    deadline: string
    description: string
    id: string
    order: number
    priority: number
    startDate: string
    status: number
    title: string
    todoListId: string
}

export type GetTasksType = {
    error: string | null
    totalCount: number
    items: Array<TaskType>
}

export type UpdateTasksModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

export const taskAPI = {
    getTasks(todolistID: string,) {
        debugger
        return instance.get<GetTasksType>(`/todo-lists/${todolistID}/tasks`)
    },
    createTask(todolistID: string, title: string) {
        return instance.post<ResponseType>(`/todo-lists/${todolistID}/tasks`, {title})
    },
    deleteTask(todolistID: string, taskId: string) {
        return instance.delete<ResponseType<TaskType>>(`/todo-lists/${todolistID}/tasks/${taskId}`)
    },
    updateTask(todolistID: string, taskId: string, model: UpdateTasksModelType) {
        return instance.put<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskId}`, model)
    },
}