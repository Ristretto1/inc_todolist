import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type InputBlockPropsType = {
    title: string
    setTitle: (title: string) => void
    addTask: () => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({title, setTitle, addTask}) => {
    const [error, setError] = useState<string>('')
    const onAddTaskHandler = () => {
        if(!title.trim()) {
            setError('Поле обязательно для ввода')
            return
        }
        addTask()
    }

    return (
        <div>
            <Input
                setTitle={setTitle}
                title={title}
                callback={onAddTaskHandler}
                setError ={setError}
                className={error ? 'errorBorder':''}
            />
            <Button name={'+'} callback={onAddTaskHandler}/>
            <div className={error && 'errorText'}>{error}</div>
        </div>
    );
};

