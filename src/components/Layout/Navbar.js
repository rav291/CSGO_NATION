import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">

            <h2><i className="fas fa-trophy fa-1x"></i> <span>Counter Strike Times</span></h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/ranking">Rankings</Link>
                </li>

                <li>
                    <Link to="/events">Upcoming Events</Link>
                </li>

                <li>
                    <Link to="search">Search Player</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar;
