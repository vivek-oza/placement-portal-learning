import React from "react";
import { Link } from "react-router-dom";

export default function LightBorderButton({ buttonDetails }) {
  const { buttonName } = buttonDetails;
  return (
    <>
      <div className="buttonParent p-2">
        <input
          type="submit"
          className="flex cursor-pointer text-center min-w-full bg-white text-black rounded-lg border-2 font-semibold border-black px-5 py-2 "
          name={buttonName}
          value={buttonName}
        />
      </div>
    </>
  );
}
