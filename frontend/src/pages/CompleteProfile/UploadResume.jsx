import React from "react";
import TextInput from "../../components/InputFields/TextInput";
import LightBorderButton from "../../components/buttons/LightBorderButton";
import NumberItem from "../../components/Items/NumberItem";
import OptionInput from "../../components/InputFields/OptionInput";
import DateInput from "../../components/InputFields/DateInput";
import TextareaInput from "../../components/InputFields/TextareaInput";
import NumberInput from "../../components/InputFields/NumberInput";
import FileInput from "../../components/InputFields/FileInput";

export default function UploadResume() {
  return (
    <>
      <div className="container min-w-full flex md:flex-row flex-col-reverse justify-center md:gap-60 justify-self-start p-4 px-10 max-w-lg max-h-fit">
        <div className="md:w-2/3 w-full">
          <form action="/CompleteProfile/Student/StudentDashboard/StudentDashboard.jsx">
            {/* Input Fields */}

            <FileInput placeholderText="SPI Sem 6" />

            {/* Submit Button */}
            <div className="w-full mt-4">
              <LightBorderButton buttonDetails={{ buttonName: "FINISH" }} />
            </div>
          </form>
        </div>

        <div className="flex flex-col md:w-auto w-full px-2 justify-center items-center md:justify-start">
          <div className="flex flex-row gap-5">
            <NumberItem numberDetails={{ number: "1", highlight: "false" }} />
            <NumberItem numberDetails={{ number: "2", highlight: "false" }} />
            <NumberItem numberDetails={{ number: "3", highlight: "false" }} />
            <NumberItem numberDetails={{ number: "4", highlight: "true" }} />
          </div>
          <div>
            <h1 className="md:text-4xl text-xl  font-bold my-5">
              Upload Resume
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
