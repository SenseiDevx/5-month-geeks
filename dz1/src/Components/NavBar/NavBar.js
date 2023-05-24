import React from 'react';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return <>
        <ul style={{display: 'flex', listStyleType: 'none'}}>
            <li style={{marginRight: '15px'}}>
                <NavLink  to='/'  className='link'>Main page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink  to="/about" className='link'>About Page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink  to="/works" className='link'>Works Page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/portfolio" className='link'>Portfolio Page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/products" className='link'>Products Page</NavLink>
            </li>
        </ul>
    </>
};

