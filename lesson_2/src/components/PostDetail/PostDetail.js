import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PostDetail = () => {
    const {id} = useParams()

    const [ post, setPost ] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])

    return (
    <>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </>
    )
};

export default PostDetail;