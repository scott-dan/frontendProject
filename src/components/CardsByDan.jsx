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
            <button onClick={GetCard}>Get Card</button>
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
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          //console.log(data);
          //console.log(rand);
          //console.log(data.cards[rand])
          //console.log(data.cards[rand].imageUrl)
          CardDisplay(data);
      });
    return;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function CardDisplay(data) {
    const rand = getRandomIntInclusive(0, 99);
    let imageContainer = document.getElementById("cardImage");
    let textContainer = document.getElementById("cardText");
    console.log(data);
    if(!data.cards[rand].hasOwnProperty('imageUrl')) {
        console.log("No image found");
        imageContainer.innerHTML = `<h1>${data.cards[rand].name}</h1></br>
          <p>No image found</p>`;
        textContainer.innerHTML = `<p>${data.cards[rand].text}</P></br>
          <p>${data.cards[rand].rarity}</P></br>
          <p>${data.cards[rand].setName}</P></br>
          <p>${data.cards[rand].type}</P></br>
          <p>${data.cards[rand].subtypes}</P>`;
    } else {
      imageContainer.innerHTML = `<img src =${data.cards[rand].imageUrl} /></br>`
      textContainer.innerHTML = `<p>${data.cards[rand].name}</p></br>
      <p>Rarity: ${data.cards[rand].rarity}</p></br>
      <p>Card set: ${data.cards[rand].setName}</P></br>`;
    }
}

window.onload = (event) => {
    GetCard();
}

export default CardsByDan;
