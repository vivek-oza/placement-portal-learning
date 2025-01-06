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
import "./Login.css";
import TextInput from "../../components/InputFields/TextInput";
import LightBorderButton from "../../components/buttons/LightBorderButton";
import RadioInput from "../../components/InputFields/RadioInput";

function Signup() {
  return (
    <div className="container flex flex-col justify-center justify-self-center p-4 max-w-lg max-h-fit overflow-y-clip">
      <form action="./IntermediatePage/AfterLogin">    //  !!!! CHANGE THIS !!!!
        
      <h1 className="text-4xl font-bold my-2 p-2">Login</h1>

      {/* Input Fields */}
      <TextInput placeholderText="Email" />
      <p className="helpText text-md font-normal text-red-500 px-2">
        Please use university email if you are a coordinator.
      </p>

      <TextInput placeholderText="Password" />

      {/* Radio Input for Roles */}
      <RadioInput
        radioGroupName="Your Role"
        radioGroup="userRole"
        radioOptions={["Coordinator", "Student"]}
      />

      {/* Submit Button */}
      <div className="w-full mt-4">
        <LightBorderButton buttonDetails={{ buttonName: "CONTINUE" }} />
      </div>
      </form>
    </div>
  );
}

export default Signup;
