import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {

    const dispatch = useDispatch()
    const {title, titleTwo} = useSelector(state => state)
    const [value, setValue ] = useState('')

    const changeTitle = () => {
        dispatch({
            type: 'CHANGE_TITLE',
        })
    }

    const withParams = () => {
        dispatch({
            type: 'CHANGE_WITH_PARAMS',
            payload: 'HELLO_GEEKS'
        })
    }

    const changeInput = (event) => {
        setValue(event.target.value)
    }

    const fromInput = () => {
        dispatch({
            type: "FROM_INPUT",
            payload: value
        })
        setValue("")
    }

    const deleted = () => {
        dispatch({
            type: "DELETED",
        })
    }


    return <>
        <div>
            <h1>{title}</h1>
            <input type="text" placeholder='title' onChange={changeInput} value={value}/>
            <button onClick={deleted}>delete</button>
            <button onClick={fromInput}>add from input</button>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>with params</button>
        </div>
    </>
};

export default MainPage;