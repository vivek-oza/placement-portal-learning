import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Placementor</Link>
            </div>
            <div className="navbar-links">
            
                <Link to="/Login" className="nav-link">Login</Link>
                <Link to="/Signup" className="nav-link nav-signup-link">Signup</Link>
                <Link to="/testpage" className="nav-link nav-signup-link">testpage</Link>
                {/* <a href="#" className="loginLink">Login</a>
                <a href="#" className="signupLink">Signup</a> */}
            </div>
        </nav>
    </>
  );
}

export default Navbar