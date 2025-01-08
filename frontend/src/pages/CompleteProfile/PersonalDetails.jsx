import React from "react";
import TextInput from "../../components/InputFields/TextInput";
import LightBorderButton from "../../components/buttons/LightBorderButton";
import NumberItem from "../../components/Items/NumberItem";
import OptionInput from "../../components/InputFields/OptionInput";
import DateInput from "../../components/InputFields/DateInput";
import TextareaInput from "../../components/InputFields/TextareaInput";
import NumberInput from "../../components/InputFields/NumberInput";
export default function PersonalDetails() {
  return (
    <>
      <div className="container min-w-full sm:px-6 flex md:flex-row md:justify-between flex-col-reverse justify-center justify-self-start  max-w-lg max-h-fit">
        <div className="md:w-1/2 w-full bg-themeAccentBlue  rounded-lg shadow-2xl  sm:p-3">
        <div>
          <form action="/CompleteProfile/PreviousAcademicDetails">
            {/* Input Fields */}
            <NumberInput placeholderText="Enrollment Number" />
            {/* <p className="helpText text-md font-normal text-red-500 px-2 mb-4">
            Please use university email if you are a coordinator.
          </p> */}

            <TextInput placeholderText="Full Name" />

            <OptionInput
              placeholderText="Gender"
              options={{
                1: "Male",
                2: "Female",
                3: "Chair",
              }}
            />

            <DateInput placeholderText="DOB" />

            <NumberInput placeholderText="Contact" />

            <NumberInput placeholderText="Secondary Contact" />

            <TextareaInput placeholderText="Address" />

            {/* Submit Button */}
            <div className="w-full mt-4">
              <LightBorderButton buttonDetails={{ buttonName: "NEXT" }} />
            </div>
          </form>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2  w-full px-2 justify-center items-center md:justify-start">
          <div className="grid gap-3 grid-flow-col">
            <NumberItem numberDetails={{ number: "1", highlight: "true" }} />
            <NumberItem numberDetails={{ number: "2", highlight: "false" }} />
            <NumberItem numberDetails={{ number: "3", highlight: "false" }} />
            <NumberItem numberDetails={{ number: "4", highlight: "false" }} />
          </div>
          <div>
            <h1 className="md:text-3xl text-center text-xl  font-bold my-5">
              Personal Details
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
