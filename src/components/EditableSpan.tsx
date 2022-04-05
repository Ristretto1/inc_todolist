import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    oldTitle: string
    callback: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    const [newTitle, setNewTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)


    const onDoubleClickHandler = () => setEdit(true)
    const onBlurHandler = () => {
        props.callback(newTitle)
        setEdit(false)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    return (
        edit
            ? <input value={newTitle} onChange={onChangeHandler} autoFocus onBlur={onBlurHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
    );
};

