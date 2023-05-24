import React from 'react';
import {Button} from "@mui/material"
import {useDispatch, useSelector} from "react-redux";
import {handleTitleAction, sayHelloAction} from "../../redux/actions";

const TitlePage = () => {

    const {title} =useSelector(state => state.titleReducer)

    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(handleTitleAction())
    }

    const sayHello = () => {
        dispatch(sayHelloAction('UALEIKUM ASSALAM'))
    }

    return (
        <>
        <h1>{title}</h1>
        <Button onClick={handleChange} variant='outlined'>Change title</Button>
        <Button onClick={sayHello} variant='outlined'>say hello</Button>
    </>
    )
};

export default TitlePage;