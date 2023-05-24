import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/reducers/postReducer";
import {fetchComment} from "../../redux/reducers/commentReducer";
import CommentList from "../CommentList/CommetList";
import {Button} from "@mui/material";

const PostList = () => {
    const dispatch = useDispatch()
    const [postShow, setPostShow] = useState({})
    const onSubmit = () => dispatch(fetchPosts())

    const posts = useSelector(state => state.posts.posts)
    const {comments} = useSelector(state => state.comments)

    const getComments = (id) => {
        setPostShow({...postShow, [id]: !postShow[id]})
        dispatch(fetchComment(id))
    }

    return (
        <div>
            <Button  variant='outlined' onClick={onSubmit}>post</Button>
            {
                posts &&
                <>
                    <h1 style={{backgroundColor: 'mediumslateblue', padding: '20px', borderRadius: '10px', width: '300px', margin: '20px auto'}}>Posts</h1>
                    <ul style={{display: 'flex', flexDirection: 'column', rowGap: '5px', listStyle: 'none'}}>
                        {
                            posts?.map(item => <li key={item?.id}>
                                <Button onClick={() => getComments(item?.id)} variant='text'>{item?.title}</Button>
                                {postShow[item?.id] && comments.length > 0 && (
                                    <CommentList comments={comments}/>
                                )}
                            </li>)
                        }
                    </ul>
                </>
            }
        </div>
    );
};

export default PostList;
