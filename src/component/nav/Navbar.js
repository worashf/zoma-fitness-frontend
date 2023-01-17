import logo from '../../logo.svg';
import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);

    }
    const closeNav = () => {
        setOpen(false)
    }

    return (
        <nav>
            <div className="logoBtn">
                <div className="logo">
                    <Link to="/"><img src={logo} /></Link>
                </div>

                <div className="btn" onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <ul className={open ? 'showNav' : 'undefined'}>
                <li> <Link to="/" onClick={closeNav}>Home</Link></li>
                <li> <Link to="/about" onClick={closeNav}>Fittness</Link></li>
                <li> <Link to="/project" onClick={closeNav}>Yoga</Link></li>
                <li> <Link to="/contact" onClick={closeNav}>Meditation</Link></li>
                <li> <Link to="/contact" onClick={closeNav}>Skills</Link></li>
                <li> <Link  to="/upload-video" onClick={closeNav} className="ml-5">Upload</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar;