import React from "react";
import "./css/App.css";
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import Signup from "./pages/Signup";
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
