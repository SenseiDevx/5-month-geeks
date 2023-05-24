import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return <>
        <ul style={{display: 'flex', listStyleType: 'none'}}>
            <li style={{marginRight: '15px'}}>
                <NavLink  to="/"  className='link'>Main page</NavLink>
            </li>
        </ul>
    </>
};

export default NavBar;