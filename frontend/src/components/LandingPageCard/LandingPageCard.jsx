import React from "react";
import DarkBlueButton from "../buttons/DarkBlueButton";

function LandingPageCard({ cardDetails }) {
  const {
    cardTitle,
    cardSubTitle,
    cardDescription,
    cardButton,
    cardButtonPath,
  } = cardDetails;

  function onCardButtonClicked() {
    alert("Button Clicked");
  }

  return (
    <>
      <div className="landingPageCard bg-white border-2 border-solid border-black rounded-lg m-2 p-4 flex flex-col flex-wrap justify-between gap-2 max-w-lg">
        <div className="flex flex-col gap-1">
          <h2 className="cardTitle text-2xl font-zilla font-bold">
            {cardTitle}
          </h2>
          <h3 className="cardSubTitle font-semibold">{cardSubTitle}</h3>
        </div>

        <p className="cardDescription">{cardDescription}</p>
        <div className="flex justify-center">
          <DarkBlueButton
            // className="cardButton w-48 max-w-4"    !!!   WORK HERE  - TO ADD CUSTOM CLASSES TO SPECIFIC CARD  !!!
            buttonDetails={{
              buttonPath: `${cardButtonPath}`,
              buttonName: `${cardButton}`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPageCard;
