import React from "react";

export default function NumberItem({ numberDetails }) {
  const { number, highlight } = numberDetails;

  let color = "#000";
  let bgcolor = "#fff";

  if (highlight === "true") {
    return (
      <>
        <div className="md:text-3xl text-2xl font-semibold font-poppins bg-black text-white border-2 border-black h-8 w-8 md:h-10 md:w-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center">
          {number}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="md:text-3xl text-2xl font-semibold font-poppins bg-white text-black border-2 border-black h-8 w-8 md:h-10 md:w-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center">
          {number}
        </div>
      </>
    );
  }
}
