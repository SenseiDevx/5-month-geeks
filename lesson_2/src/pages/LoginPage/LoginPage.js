import React from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const login = () => {
        setTimeout(() => {
            navigate("/", {state: "OMURBEK"})
        }, 2000)
    }


    return <>
        <input type="email"/>
        <input type="password"/>
        <button onClick={login}>login</button>
    </>
};

export default LoginPage;