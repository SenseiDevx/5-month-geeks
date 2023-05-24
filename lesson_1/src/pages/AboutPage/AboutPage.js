import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    const location = useLocation()
    console.log(location)

    return <>
        <div>
            <button onClick={back}>back</button>
            <h1>About Page - Hello {location.state}</h1>
        </div>
    </>;
};

export default AboutPage;



