//import { card } from "mtgsdk";
import React from "react";

const url = "https://api.magicthegathering.io/v1/cards/?artist=dan+scott";

function CardsByDan() {
  return (
    <div className="cardsByDan">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Cards By Dan</h1>
            <p>
              This returns a randomly selected card illustrated by the artist Dan Scott. Click the refresh button to load another card. {/*I think I'd like to change this to refresh on a set interval. Perhaps add settings for refresh timing and number of cards to display*/}
            </p>
            <button onClick={GetCard}>Get New Card</button>
          </div>
          <div className="col-lg-7">
            <div className="cardImage text-center" id="cardImage"></div>
      </div>
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
      imageContainer.innerHTML = `<img src =${card.imageUrl} /></br>`
      textContainer.innerHTML = `<p>${card.name}</p></br>
      <p>Rarity: ${card.rarity}</p></br>
      <p>Card set: ${card.setName}</P></br>`;
    }
}

window.onload = (event) => {
    GetCard();
}

export default CardsByDan;
