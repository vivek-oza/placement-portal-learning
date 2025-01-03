import React from "react";
import "./css/App.css";
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-content">
        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="/Signup" element= { <Signup /> }/>
          <Route path="/testpage" element= { '/pages/testpage.html' }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
