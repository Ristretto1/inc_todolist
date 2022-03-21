import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    setError?: (error:string) => void
    className: string
}

export const Input: React.FC<InputPropsType> = ({title, setTitle, callback,className, setError}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (setError) setError('')
        if (e.key === 'Enter') callback();
    }

    return (
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={className}
        />
    );
};

