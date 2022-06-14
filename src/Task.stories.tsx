import React from 'react';
import {Task} from './Task';
import {action} from '@storybook/addon-actions';


export default {
    title: 'TaskBaseExample',
    component: Task,
}

export const TaskBaseExample = () => {
    return <>
        <Task
            task={{id: '1', isDone: false, title: 'HTML'}}
            changeTaskStatus={action('changeTaskStatus')}
            changeTaskTitle={action('changeTaskTitle')}
            removeTask={action('removeTask')}
            todolistId={'todolistId'}
        />
        <Task
            task={{id: '1', isDone: true, title: 'JS'}}
            changeTaskStatus={action('changeTaskStatus')}
            changeTaskTitle={action('changeTaskTitle')}
            removeTask={action('removeTask')}
            todolistId={'todolistId_1'}
        />

    </>
}
