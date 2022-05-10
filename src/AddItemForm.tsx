import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            size={"small"}
        />
        {/*className={error ? 'error' : ''}*/}
        <Button size="small"
                variant="contained"
                onClick={addItem}
                style={{maxWidth: '38px', maxHeight: '38px', minWidth: '38px', minHeight: '38px', backgroundColor: 'black'}}
        >+</Button>
        {error && <div className="error-message">{error}</div>}
    </div>
}
