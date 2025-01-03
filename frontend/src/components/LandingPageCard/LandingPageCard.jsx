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
      <div className="landingPageCard bg-white border-2 border-solid border-black rounded-lg m-2 p-2  flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="cardTitle text-2xl font-zilla font-bold">
            {cardTitle}
          </h2>
          <h3 className="cardSubTitle font-semibold">{cardSubTitle}</h3>
        </div>

        <p className="cardDescription">{cardDescription}</p>

        <DarkBlueButton
          // className="cardButton w-48 max-w-4"    !!!   WORK HERE    !!!
          buttonDetails={{
            buttonPath: `${cardButtonPath}`,
            buttonName: `${cardButton}`,
          }}
        />
      </div>
    </>
  );
}

export default LandingPageCard;
