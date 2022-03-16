import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string,
    setTitle: (title: string) => void
    callback: () => void
}

const Input: React.FC<InputPropsType> = (props) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            props.callback()
            props.setTitle('')
        }
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler} onKeyPress={onKeyPressHandler}/>
    );
};

export default Input;