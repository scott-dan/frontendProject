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
            <button onClick={NewCard}>Refresh</button>
          </div>
        </div>
      </div>
      <div className="display text-center">
        <section className="cardResult" id="cardResult">
          <div>Hi!</div>
        </section>
      </div>
    </div>
  );
}

function NewCard() {
    const rand = getRandomIntInclusive(0, 99);
    console.log(url);
    let page = document.getElementById("cardResult");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          //console.log(data);
          //console.log(rand);
          console.log(data.cards[rand])
          page.innerHTML = `<img src =${data.cards[rand].imageUrl} />`
      });
    return;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
export default CardsByDan;
