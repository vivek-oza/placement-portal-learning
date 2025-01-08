import React from "react";

function TextareaInput(placeholderText) {
  const { placeholderText: placeholder } = placeholderText;
  return (
    <>
      <div className="text-input-parent p-2">
        <p className="font-medium">{placeholder}</p>
        <textarea name="cars" id="cars" className="p-2 min-w-full border-2 border-themeDarkBlue rounded-md min-h-12" />

        {/* <input
          type="text"
          placeholder={placeholder}
          className="p-2 min-w-full border-2 border-themeDarkBlue rounded-md "
        /> */}
      </div>
    </>
  );
}

export default TextareaInput;
