import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return <>
        <h1 style={{fontSize: 60}}>Not Found 404</h1>
        <Link to="/">
            HOME
        </Link>
    </>
};

export default NotFound;