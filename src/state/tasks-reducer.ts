import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';
import {TaskType} from '../Todolist';

export type FirstTaskActionType = {
    type: ''
}
export type SecondTaskActionType = {
    type: ''
}


type ActionsType = FirstTaskActionType | SecondTaskActionType

export const tasksReducer = (state: Array<TaskType>, action: ActionsType): Array<TaskType> => {
    switch (action.type) {

        default:
            throw new Error('I don\'t understand this type')
    }
}

export const FirstTaskAC = (): FirstTaskActionType => {
    return {type: ''}
}
export const SecondTaskAC = (): SecondTaskActionType => {
    return {type: ''}
}

