// import React from "react";
// import "./Signup.css";
// import TextInput from "../../components/InputFields/TextInput";
// import LightBorderButton from "../../components/buttons/LightBorderButton";
// import RadioInput from "../../components/InputFields/RadioInput";

// function Signup() {
//   const roles = ["Coordinator", "Student"];

//   return (
//     <>
//       <div className="container p-2 max-w-lg">
//         <div>Signup</div>
//         <TextInput placeholderText={"Email"} />
//         <TextInput placeholderText={"Password"} />
//         <p className="helpText text-sm text-gray-500 px-2">
//           Please use university email if you are a coordinator
//         </p>

//         {/* Map through roles */}
//         {roles.map((role) => (
//           <RadioInput
//             key={role}
//             radioDetails={{
//               radioFieldName: role,
//               radioGroupName: "Your Role",
//               radioGroup: "userRole",
//             }}
//           />
//         ))}

//         <LightBorderButton
//           className="custom-class-for-signup w-full mt-4" // Add specific classes for this button
//           buttonDetails={{
//             buttonName: "Continue",
//           }}
//         />
//       </div>
//     </>
//   );
// }

// export default Signup;

import React from "react";
import "./Signup.css";
import TextInput from "../../components/InputFields/TextInput";
import LightBorderButton from "../../components/buttons/LightBorderButton";
import RadioInput from "../../components/InputFields/RadioInput";
import OptionInput from "../../components/InputFields/OptionInput";

function Signup() {
  return (
    <div className="flex justify-center items-center">
    <div className="container flex flex-col justify-center justify-self-center p-2 max-w-md bg-themeAccentBlue  rounded-lg shadow-2xl ">
      <h1 className="text-4xl font-zilla font-bold my-2 p-2 text-center">Signup</h1>

      {/* Input Fields */}
      <TextInput placeholderText="Email" />
      <p className="helpText text-md font-normal text-red-500 px-2 mb-4">
        Please use university email if you are a coordinator.
      </p>

      <TextInput placeholderText="Password" />
      <TextInput placeholderText="Confirm Password" />

      {/* Radio Input for Roles */}
      {/* <RadioInput
        radioGroupName="Your Role"
        radioGroup="userRole"
        radioOptions={["Coordinator", "Student"]}
      /> */}

      <OptionInput
        placeholderText="Role"
        options={{
          coordinator: "Coordinator",
          student: "Student",
        }}
      />

      <div className="w-full mt-4">
        <LightBorderButton buttonDetails={{ buttonName: "GENERATE OTP" }} />
      </div>

      <TextInput placeholderText="Enter OTP Sent on Email" />

      {/* Submit Button */}
      <div className="w-full mt-4">
        <LightBorderButton buttonDetails={{ buttonName: "CONTINUE" }} />
      </div>
    </div>
    </div> 
  );
}

export default Signup;
