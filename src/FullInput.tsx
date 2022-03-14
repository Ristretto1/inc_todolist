import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from './Button';

type FullInputPropsType = {
    addTask: (id: string) => void
}

const FullInput: React.FC<FullInputPropsType> = (props) => {

    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            props.addTask(title)
            setTitle('')
        }
    }

    const onClickAddTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} onKeyPress={onKeyPressHandler}/>
            <Button name={'+'} callBack={onClickAddTaskHandler}/>
        </div>
    );
};

export default FullInput;