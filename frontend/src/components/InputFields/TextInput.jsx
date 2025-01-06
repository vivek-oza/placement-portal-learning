import React from "react";

function TextInput(placeholderText) {
  const { placeholderText: placeholder } = placeholderText;
  return (
    <>
      <div className="text-input-parent p-2">
        <p className="font-medium">{placeholder}</p>
        <input
          type="text"
          placeholder={placeholder}
          className="p-2 min-w-full border-2 border-themeDarkBlue rounded-md "
        />
      </div>
    </>
  );
}

export default TextInput;
