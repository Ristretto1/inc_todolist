import React, {ChangeEvent, useState} from 'react';
import Button from './Button';

type FullInputPropsType = {
    addTask: (id: string) => void
}

const FullInput: React.FC<FullInputPropsType> = (props) => {

    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickAddTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <Button name={'+'} callBack={onClickAddTaskHandler}/>
        </div>
    );
};

export default FullInput;