import React from "react";
import "./css/App.css";
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-content">
        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="/Signup" element= { <Signup /> }/>
          <Route path="/Login" element= { <Login /> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
