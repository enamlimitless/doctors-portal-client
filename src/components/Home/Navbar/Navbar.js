import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light text-light">
                <div className="container">
                    <a className="navbar-brand logo" href="/">Brown Dant</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style={{marginLeft:'auto'}}>
                            <li className="nav-item">
                                <a className="nav-link ma active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ma" href="/appointment">Appointment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ma ml-5" href="/services">Dental Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ma text-light" href="/reviews">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ma text-light" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ma text-light" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;