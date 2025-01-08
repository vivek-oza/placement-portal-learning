import React from "react";
import "./css/App.css";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import AfterLogin from "./pages/IntermediatePages/AfterLogin";
import PersonalDetails from "./pages/CompleteProfile/PersonalDetails";
import PreviousAcademicDetails from "./pages/CompleteProfile/PreviousAcademicDetails";
import AcademicDetails from "./pages/CompleteProfile/AcademicDetails";
import UploadResume from "./pages/CompleteProfile/UploadResume";

function App() {
  return (
    <>
      <div className="main-content h-screen w-screen flex flex-col">
        <div className="">
        <Navbar></Navbar>
        </div>
        <div className="main-body bg-themeLightBlue overflow-auto h-full p-5 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route
              path="/IntermediatePage/AfterLogin"
              element={<AfterLogin />}
            />
            <Route
              path="/CompleteProfile/PersonalDetails"
              element={<PersonalDetails />}
            />
            <Route
              path="/CompleteProfile/PreviousAcademicDetails"
              element={<PreviousAcademicDetails />}
            />
            <Route
              path="/CompleteProfile/AcademicDetails"
              element={<AcademicDetails />}
            />
            <Route
              path="/CompleteProfile/UploadResume"
              element={<UploadResume />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
