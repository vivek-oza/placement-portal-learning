import React from 'react'
import DarkBlueButton from '../buttons/DarkBlueButton';

function LandingPageCard({cardDetails}) {
  const { cardTitle, cardSubtitle, cardDescription, cardButton, cardButtonPath } = cardDetails;

  function onCardButtonClicked() {
    alert("Button Clicked")
  }

  return (
    <>
        <div className="landingPageCard">
            <h2 className="cardTitle">{cardTitle}</h2>

            <h3 className="cardSubTitle">{cardSubtitle}</h3>

            <p className="cardDescription">{cardDescription}</p>

            <button className="cardButton" onClick={onCardButtonClicked}>
              <DarkBlueButton buttonDetails={{buttonPath:`${cardButtonPath}` ,buttonName: `${cardButton}` }}/>
            </button>
        </div>
    </>
  );
}

export default LandingPageCard;
