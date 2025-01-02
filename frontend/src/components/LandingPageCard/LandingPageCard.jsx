import React from 'react'

function LandingPageCard({cardDetails}) {
  const { cardTitle, cardSubtitle, cardDescription, cardButton } = cardDetails;

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
                {cardButton}
            </button>
        </div>
    </>
  );
}

export default LandingPageCard;
