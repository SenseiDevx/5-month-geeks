import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    const [ posts, setPosts ] = useState([])

     useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(response => setPosts(response))
    }, [])

    return (
        <div>
            <ol>
            {posts.map( post =>
                <li key={post.id}>
                    <Link to={`/about/${post?.id}`}>
                        <h1>{post.title}</h1>
                        {<img src={post.url} alt=""/>}
                    </Link>
                </li>
            )}
        </ol>
        </div>
    );
};

export default MainPage;