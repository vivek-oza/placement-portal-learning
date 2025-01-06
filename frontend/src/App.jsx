import React from "react";
import "./css/App.css";
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import AfterLogin from "./pages/IntermediatePages/AfterLogin";
import StudentCompleteProfilePersonalDetails from "./pages/CompleteProfile/StudentCompleteProfilePersonalDetails";

function App() {
  return (
    <>
      <div className="main-content min-h-screen">
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="/Signup" element= { <Signup /> }/>
          <Route path="/Login" element= { <Login /> }/>
          <Route path="/IntermediatePage/AfterLogin" element= { <AfterLogin /> }/>
          <Route path="/CompleteProfile/StudentCompleteProfilePersonalDetails" element= { <StudentCompleteProfilePersonalDetails /> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
