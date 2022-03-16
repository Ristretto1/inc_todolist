import React from 'react';

type TodoListHeaderPropsType = {
    title: string,
}

const TodoListHeader: React.FC<TodoListHeaderPropsType> = (props) => {
    return (
        <h3>{props.title}</h3>
    );
};

export default TodoListHeader;