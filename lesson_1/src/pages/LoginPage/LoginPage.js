import React from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const login = () => {
        setTimeout(() => {
            navigate("/about", {state: "OMURBEK"})
        }, 2000)
    }

    return <>
        <input type="text" placeholder="login"/>
        <input type="text" placeholder="password"/>
        <button onClick={login}>log in</button>
    </>
};

export default LoginPage;