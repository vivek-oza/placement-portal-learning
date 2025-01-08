import React from "react";
// import TextInput from "../../components/InputFields/TextInput";
import LightBorderButton from "../../components/buttons/LightBorderButton";
import NumberItem from "../../components/Items/NumberItem";
// import OptionInput from "../../components/InputFields/OptionInput";
// import DateInput from "../../components/InputFields/DateInput";
// import TextareaInput from "../../components/InputFields/TextareaInput";
import NumberInput from "../../components/InputFields/NumberInput";
export default function PreviousAcademicDetails() {
  return (
    <>
      <div className="container min-w-full flex md:flex-row flex-col-reverse justify-center md:gap-60 justify-self-start p-4 px-10 max-w-lg max-h-fit">
        <div className="md:w-2/3 w-full">
          <form action="/CompleteProfile/AcademicDetails">
            {/* Input Fields */}
            <NumberInput placeholderText="10th Percentage" />
            <NumberInput placeholderText="10th Board Name" />
            <NumberInput placeholderText="10th  Year of Passing" />
            <NumberInput placeholderText="10th Medium of Passing" />
            <NumberInput placeholderText="12th Percentage" />
            <NumberInput placeholderText="12th Board Name" />
            <NumberInput placeholderText="12th  Year of Passing" />

            {/* Submit Button */}
            <div className="w-full mt-4">
              <LightBorderButton buttonDetails={{ buttonName: "NEXT" }} />
            </div>
          </form>
        </div>

        <div className="flex flex-col md:w-auto w-full px-2 justify-center items-center md:justify-start">
          <div className="flex flex-row gap-5">
            <NumberItem numberDetails={{ number: "1", highlight: "false" }} />
            <NumberItem numberDetails={{ number: "2", highlight: "true" }} />
            <NumberItem numberDetails={{ number: "3", highlight: "false" }} />
            <NumberItem numberDetails={{ number: "4", highlight: "false" }} />
          </div>
          <div>
            <h1 className="md:text-4xl text-xl  font-bold my-5">
              Previous Academic Details
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
