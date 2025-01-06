import React from "react";
import { Link } from "react-router-dom";
import DarkBlueButton from "../buttons/DarkBlueButton";

function Navbar() {
    return (
    <>
        <nav className="navbar flex justify-between items-center px-5 py-2 bg-white">
            <div className="navbar-brand font-bold  font-zilla text-2xl">
                <Link to="/">PLACEMENTOR</Link>
            </div>
            <div className="navbar-links flex gap-5 justify-center items-center">
            
                <Link to="/Login" className="nav-link  font-semibold">Login</Link>
                <DarkBlueButton buttonDetails={{buttonPath: '/Signup',buttonName: 'Sign up'}}/>
                {/* <Link to="/testpage" className="nav-link nav-signup-link">testpage</Link> */}
            </div>
        </nav>
    </>
  );
}

export default Navbar