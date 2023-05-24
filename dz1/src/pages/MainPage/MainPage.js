import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const MainPage = () => {
    const [ users, setUsers ] = useState([])



    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setUsers(response))
    }, [])

    return <>
        <button onClick={back}>back</button>
        <h1>MainPage</h1>

        <ul>
            {users.map( user =>
                <li key={user.id}>
                    <Link>
                        {user.username.toUpperCase()}
                    </Link>
                </li>
            )}

        </ul>
    </>
};

export  default MainPage;