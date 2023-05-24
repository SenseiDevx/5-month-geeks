import React from 'react';
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    return <>
        <div>
            <button onClick={back}>back</button>
            <h1>Main Page</h1>
        </div>
    </>;
};

export default MainPage;