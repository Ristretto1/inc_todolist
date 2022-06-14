import React from 'react';
import {AddItemForm} from './AddItemForm';
import {action} from '@storybook/addon-actions';


export default {
    title: 'AddItemFormBaseExample',
    component: AddItemForm,
}

export const AddItemFormBaseExample = () => {
    return <AddItemForm addItem={action('add item')}/>
}
