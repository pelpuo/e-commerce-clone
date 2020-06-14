import React from 'react'
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <div className="Navigation">
                <div class="NavNav">
                    <div id="NavInfo"><span>Free shipping for standard order over $100</span></div>
                    <div id="NavLinks">
                        <span className="NavLink">Help & FAQs</span>
                        <span className="NavLink">My Account</span>
                        <span className="NavLink">EN</span>
                        <span className="NavLink">USD</span>
                    </div>
                </div>
            <div className="container PagesNav">
                <nav class="navbar navbar-fixed navbar-expand-lg navbar-light">
                <a class="navbar-brand" href=".">COZA STORE</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    )
}
