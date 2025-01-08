import React from "react";

function FileInput(placeholderText) {
  const { placeholderText: placeholder } = placeholderText;
  return (
    <>
      <div className="text-input-parent p-2">
        <p className="font-medium">{placeholder}</p>
        <input
          type="file"
          placeholder={placeholder}
          className="p-2 min-h-12 min-w-full border-2 bg-white border-themeDarkBlue rounded-md "
        />
      </div>
    </>
  );
}

export default FileInput;
