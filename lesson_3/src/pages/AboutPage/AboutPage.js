import React from 'react';
import {useSelector} from "react-redux";

const AboutPage = () => {
    const {title} = useSelector(state => state)

    return (
        <div>
            <h1>About Page Component - {title}</h1>
        </div>
    );
};

export default AboutPage;