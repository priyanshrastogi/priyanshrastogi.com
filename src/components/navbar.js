import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const colorClass = props.changeColor ? 'navbar-color-on-scroll navbar-transparent' : 'navbar-default'; 
    return (
        <nav className={`navbar ${colorClass} fixed-top navbar-expand-lg`} color-on-scroll="100" id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                    <Link className="navbar-brand" to="/"><strong>Priyansh Rastogi</strong></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://blog.priyanshrastogi.com"><strong>Blog</strong></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects"><strong>Projects</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bookshelf"><strong>Bookshelf</strong></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;