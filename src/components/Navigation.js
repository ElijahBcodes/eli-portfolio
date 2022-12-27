import { Link, useLocation ,} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FcMenu } from "react-icons/fc";
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    //if location changes will set navbar loc to false, will close navbar
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
            <NavLink to="/" className="btn btn-ghost normal-case text-xl">Home
            </NavLink>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/about'>About</NavLink></li>
            <li tabIndex={0}>
                <a>
                Resume
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100">
                <li><a>Projects</a></li>
                <li><a>Skills</a></li>
                </ul>
            </li>
            <li><a>Item 3</a></li>
            </ul>
            </div>
        </div>
    )
}


export default Navigation