import React from 'react';
import {useNavigate} from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return <>
        <button onClick={back}>back</button>
        <h1>AboutPage</h1>
    </>
};

export default AboutPage;