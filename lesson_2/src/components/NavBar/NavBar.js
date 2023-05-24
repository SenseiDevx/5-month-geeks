import React from 'react';
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return <>
        <ul>
            <li>
                <NavLink to='/'>Main Page</NavLink>
                <NavLink to='/posts'>Posts Page</NavLink>
            </li>
        </ul>
    </>
};

export default NavBar;