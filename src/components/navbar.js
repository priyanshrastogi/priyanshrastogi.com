import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Index</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://blog.priyanshrastogi.com">Blog</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
            </li>
        </ul>
    );
}

export default NavBar;