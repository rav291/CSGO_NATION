import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-danger">
            <h1>
                <a href="https://icon-library.net/icon/counter-strike-icon-16.html" title="Counter Strike Icon #165724"><img src="https://icon-library.net//images/counter-strike-icon/counter-strike-icon-16.jpg" width="350" /></a>
            </h1>

            <Link to="/"><h3>Home</h3></Link>
            <Link to="/ranking"><h3>Rankings</h3></Link>
            <Link to="/events"><h3>Upcoming Events</h3></Link>
            <Link to="search"><h3>Search Player</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
            
        </nav >
    )
}

export default Navbar;
