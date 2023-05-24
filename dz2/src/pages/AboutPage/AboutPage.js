import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const AboutPage = () => {
     const [ post, setPost ] = useState({})
    const {id} = useParams()

    const navigate = useNavigate()

    const back = () => {
         navigate(-1)
    }

     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json())
            .then(response => setPost(response))
    }, [id])

    return (
        <div>
            <h1>about page</h1>
            <button onClick={back}>back</button>
            <h2>{post?.id} :  {post?.title}</h2>
            <img src={post?.url} alt=""/>
        </div>
    );
};

export default AboutPage;