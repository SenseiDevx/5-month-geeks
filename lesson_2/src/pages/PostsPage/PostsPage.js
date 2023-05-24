import React, {useEffect, useState} from 'react';
import Post from "../../components/Post/Post";

function PostsPage(props) {

    const [ posts, setPosts] = useState([])

    const getPost = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        setPosts(posts)
    }

    useEffect(() => {
        getPost()
    }, [])

    return <>
        <h1>post page</h1>
        {posts.map(post => <Post post={post} key={post.id}/>)}
    </>
};

export default PostsPage;