import React from 'react';
import {useNavigate} from "react-router-dom";

const WorksPage = () => {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return <>
        <button onClick={back}>back</button>
        <h1>Works Page</h1>
    </>
};

export default WorksPage;