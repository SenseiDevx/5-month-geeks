import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return<>
        <div>
            <h5>{post.title }</h5>
            <Link to={`/posts/${post.id}`}>подробнее</Link>
            <p>--------------------------------------------------------------------------</p>
        </div>
    </>
};

export default Post;
