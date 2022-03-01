import React from "react";

const url = "https://api.magicthegathering.io/v1/cards/?artist=dan+scott";

function CardsByDan() {
  return (
    <div className="cardsByDan">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-bold">Cards By Dan</h1>
            <p>
              This returns a randomly selected card illustrated by the artist Dan Scott. Click the refresh button to load another card. {/*I think I'd like to change this to refresh on a set interval. Perhaps add settings for refresh timing and number of cards to display*/}
            </p>
            <button onClick={GetCard}>Get Card</button>
          </div>
          <div className="col-lg-7 text-center">
            <img src="https://media.magic.wizards.com/image_legacy_migration/sideboard/images/usnat07/scott.jpg"
            alt="Dan Scott MtG Artist"/>
            <p>
               Dan Scott is a freelance illustrator based out of the Kansas City, Missouri area. 
               Dan is one of the more prolific Magic artists, having illustrated over 200 cards for Magic:The Gathering, 
               including such iconic cards as Ponder, Solemn Simulacrum and Akroma's Memorial. 
               He's painted dozens of Hearthstone cards as well.
            </p>
      </div>
      <div className="cardImage text-center" id="cardImage"></div>
      <div className="cardText text-center" id="cardText"></div>
        </div>
      </div>
    </div>
  );
}

function GetCard() {
    //console.log(url);
    const rand = getRandomIntInclusive(0, 99);
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          //console.log(data);
          //console.log(rand);
          //console.log(data.cards[rand])
          //console.log(data.cards[rand].imageUrl)
          CardDisplay(data.cards[rand]);
      });
    return;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function CardDisplay(data) {
    const card = data;
    let imageContainer = document.getElementById("cardImage");
    let textContainer = document.getElementById("cardText");
    console.log(card);
    if(!card.hasOwnProperty('imageUrl')) {
        console.log("No image found");
        imageContainer.innerHTML = `<h1>${card.name}</h1></br>
          <p>No image found</p>`;
        textContainer.innerHTML = `<p>${card.text}</P></br>
          <p>${card.rarity}</P></br>
          <p>${card.setName}</P></br>
          <p>${card.type}</P></br>
          <p>${card.subtypes}</P>`;
    } else {
      imageContainer.innerHTML = `<img src ="${card.imageUrl}" alt="${card.name}"/></br>`
      textContainer.innerHTML = `<p>${card.name}</p></br>
      <p>Rarity: ${card.rarity}</p></br>
      <p>Card set: ${card.setName}</P></br>`;
    }
}

/* window.onload = function() {
    GetCard();
} */

export default CardsByDan;
