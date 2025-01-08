import React from "react";

function DateInput(placeholderText) {
  const { placeholderText: placeholder } = placeholderText;
  return (
    <>
      <div className="text-input-parent p-2">
        <p className="font-medium">{placeholder}</p>
        

        {/* <select name="cars" id="cars" className="p-2 min-w-full border-2 border-themeDarkBlue rounded-md min-h-12">

          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select> */}
        <input
          type="date"
          className="p-2 min-w-full border-2 border-themeDarkBlue rounded-md "
        />
      </div>
    </>
  );
}

export default DateInput;
