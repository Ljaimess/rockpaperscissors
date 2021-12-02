import React from "react";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a style={{color:"gainsboro"}} className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a style={{color:"gainsboro"}} className="nav-link"  aria-current="page" href="https://ljaimess.github.io/">Home</a>
                    <a style={{color:"gainsboro"}} className="nav-link"  href="https://ljaimess.github.io/projects">Projects</a>
                    <a style={{color:"gainsboro"}} className="nav-link"  href="https://ljaimess.github.io/about">About</a>
                    <a style={{color:"gainsboro"}} className="nav-link"  href="https://ljaimess.github.io/contact">Contact</a>
                    <a style={{color:"gainsboro"}} className="nav-link"  href="https://ljaimess.github.io/links">Links</a>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;

