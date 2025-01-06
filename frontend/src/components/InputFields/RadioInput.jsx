// import React from "react";

// function RadioInput({radioDetails}) {
//   const { radioFieldName, radioGroupName, radioGroup } = radioDetails;
//   return (
//     <>
//       <div className="p-2 flex flex-col gap-2">
//         <div>
//           <p>{radioGroupName}</p>
//         </div>
//         <div className="flex flex-row items-center">
//           <input
//             type="radio"
//             name={radioFieldName}
//             id={radioGroup}
//             className="w-10 h-10 border-2 border-black me-2"
//           />
//           <div>{radioFieldName}</div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RadioInput;



import React from "react";

function RadioInput({ radioGroupName, radioGroup, radioOptions }) {
  return (
    <div className="p-2 flex flex-col gap-2">
      {/* Radio Group Name */}
      <div>
        <p className="font-medium">{radioGroupName}</p>
      </div>

      {/* Radio Buttons */}
      <div className="flex justify-start items-center gap-12">
        {radioOptions.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name={radioGroup}
              id={`${radioGroup}-${option}`}
              value={option}
              className="w-12 h-12 border-2 border-black"
            />
            <label htmlFor={`${radioGroup}-${option}`} className="font-medium">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioInput;