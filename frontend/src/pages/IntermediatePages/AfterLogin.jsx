import React from "react";
import { Link } from "react-router-dom";

export default function AfterLogin() {
  return (
    <>
      <div className="flex justify-center items-center min-h-[500px]">
        <Link
          Link
          to={"/CompleteProfile/PersonalDetails"}
        >
          
          <p className="text-2xl sm:text-5xl md:text-7xl text-center font-bold font-zilla flex items-center justify-center">
            Complete Your Profile ! ➡️
          </p>
        </Link>
      </div>
    </>
  );
}
