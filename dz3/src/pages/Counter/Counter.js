import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from "@mui/material";


function Counter() {
    const { count, color } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    return <>
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color }}>
            <Button variant='outlined' color='error' onClick={handleDecrement}>-</Button>
            <h1>{count}</h1>
            <Button variant='contained' color='success' onClick={handleIncrement}>+</Button>
        </div>
    </>
}

export default Counter;
