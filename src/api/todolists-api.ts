import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY' : 'ac422c12-b2f2-4703-8702-4c62b2f04639'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export const todolistsAPI = {
    getTodolists() {
        return instance.get('/todo-lists')
    },
    createTodolists(title : string) {
        return instance.post('/todo-lists', {title} )
    },
    deleteTodolists(todolistID: string) {
        return instance.delete(`/todo-lists/${todolistID}`)
    },
    updateTodolists(todolistID: string, title: string) {
        return instance.put(`/todo-lists/${todolistID}`, {title})
    },
}