import React from 'react';
import {useNavigate} from "react-router-dom";

const Products = () => {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return <>
        <button onClick={back}>back</button>
        <h1>Products Page</h1>
    </>
};

export default Products;