import React from 'react';
import {useNavigate} from "react-router-dom";

const PortfolioPage = () => {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return <>
        <button onClick={back}>back</button>
        <h1>Portfolio Page</h1>
    </>
};

export default PortfolioPage;