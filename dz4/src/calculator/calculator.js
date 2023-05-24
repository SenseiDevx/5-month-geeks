import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add, divide, multiply, subtract} from "../redux/actions";
import {Button, TextField} from "@mui/material";
import styles from './calculator.module.css'



const Calculator = () => {
    const [num1, setNum1] =useState("")
    const [num2, setNum2] =useState("")
    const dispatch = useDispatch()
    const {result} = useSelector(state => state.calcReducer)

    const handleAdd = () => {
        if (num1 && num2){
            dispatch(add(+num1, +num2))
        }
        setNum1('')
        setNum2('')
    }

    const handleSubtract = () => {
    if (num1 && num2) {
      dispatch(subtract(parseInt(num1), parseInt(num2)));
    }
  };

  const handleMultiply = () => {
    if (num1 && num2) {
      dispatch(multiply(parseInt(num1), parseInt(num2)));
    }
  };

  const handleDivide = () => {
    if (num1 && num2) {
      dispatch(divide(parseInt(num1), parseInt(num2)));
    }
  };

    return (
        <>
            <div className={styles.container}>
                <TextField type="number"
                           label="number1"
                           color='success'
                           value={num1}
                           onChange={(e) => setNum1(e.target.value)
                }
                />
                <TextField type="number"
                           label='number2'
                           color='success'
                           value={num2}
                           onChange={(e) => setNum2(e.target.value)}
                />
            </div>
            <div>
                <Button variant='outlined' onClick={handleAdd}>+</Button>
                <Button variant='outlined' onClick={handleSubtract}>-</Button>
                <Button variant='outlined' onClick={handleMultiply}>*</Button>
                <Button variant='outlined' onClick={handleDivide}>/</Button>
            </div>
             {!result ? <h3>pusto.....</h3> : <h2>{result}</h2>}
        </>
    );
};

export default Calculator;