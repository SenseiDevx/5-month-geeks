import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, deleteUser} from "../../redux/actions";

const UsersPage = () => {
    const [ value, setValue ] = useState("")
    const dispatch = useDispatch()

    const {usersList} = useSelector(state => state.usersReducer)

    const addUsers = (e) => {
        e.preventDefault()
        if (!value.trim()){
            return
        }
        dispatch(addUserAction(value))
        setValue('')
    }

    const delet = (id) => {
        dispatch(deleteUser(usersList.filter((i,k) => k !== id)))
    }



    return (
        <>
            <h1>Users list</h1>

            <TextField label='users' value={value} variant="outlined" placeholder="users" type="text" onChange={(e) => setValue(e.target.value)}/>
            <Button variant='contained' onClick={addUsers}>add user</Button>

            {usersList.length > 0
                ?
                usersList.map((user,k) => <p>
                    {user}
                    <Button variant="contained" onClick={() => delet(k)}>delete</Button>
                </p>)
                : <p>список пуст</p>
            }
        </>
    );
};

export default UsersPage;