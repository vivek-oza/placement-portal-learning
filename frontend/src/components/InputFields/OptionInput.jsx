import React from "react";

function OptionInput({ placeholderText, options }) {
  return (
    <div className="text-input-parent p-2">
      {/* Placeholder Text */}
      <p className="font-medium">{placeholderText}</p>

      {/* Select Dropdown */}
      <select
        name={placeholderText.toLowerCase().replace(/\s+/g, "-")}
        id={placeholderText.toLowerCase().replace(/\s+/g, "-")}
        className="p-2 min-w-full border-2 border-themeDarkBlue rounded-md min-h-12"
      >
        {/* Generate Options Dynamically */}
        {Object.entries(options).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OptionInput;
