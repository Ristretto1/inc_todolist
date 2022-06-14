import React from 'react';
import {EditableSpan} from './EditableSpan';
import {action} from '@storybook/addon-actions';


export default {
    title: 'EditableSpanBaseExample',
    component: EditableSpan,
}

export const EditableSpanBaseExample = () => {
    return <EditableSpan value={'double click for change value'} onChange={action('new value: ')}/>
}
