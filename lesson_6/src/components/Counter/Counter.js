import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/counterReducer/counterReducer";
import {Button, Typography} from "@mui/material";

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
            <h1>Counter: </h1>
            <div style={{display: 'flex', margin: '10px auto'}}>
                <Button variant="outlined" onClick={e => dispatch(decrement())}>-</Button>
                <Typography component='h2'>{counter}</Typography>
                <Button variant="outlined" onClick={e => dispatch(increment())}>+</Button>
            </div>
        </div>
    );
};

export default Counter;