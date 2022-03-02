import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "https://api.magicthegathering.io/v1/cards/?artist=dan+scott";

function Card(props){
  return (
    <div className="p-3">
      <div>
      <section className="grid-container">
          <div className="grid-item item1">
            <img
              src={props.value.imageUrl}
              alt={`${props.value.name}`}
              height="300"
              width="200"
            ></img>
          </div>
          <div className="grid-item item2">
            <strong>Name:&nbsp;</strong>
            <p>{props.value.name}</p>
          </div>
          <div className="grid-item item3">
            <strong>Artist:&nbsp;</strong>
            <p>{props.value.artist}</p>
          </div>
          <div className="grid-item item4">
            <strong>Type:&nbsp;</strong>
            {props.value.originalType}
          </div>
          <div className="grid-item item5">
            <strong>Rarity:&nbsp;</strong>
            {props.value.rarity}
          </div>
          <div className="grid-item item6">
            <strong>Power:&nbsp;</strong>
            <p>{props.value.power}</p>
          </div>
          <div className="grid-item item7">
            <strong>Toughness:&nbsp;</strong>
            <p>{props.value.toughness}</p>
          </div>
          <div className="grid-item item8">
            <strong>Set:&nbsp;</strong>
            {props.value.setName}
          </div>
          <div className="grid-item item9">
            <strong>Description:&nbsp;</strong>
            {props.value.originalText}
          </div>
          <div className="grid-item item10">
            <strong>Lore:&nbsp;</strong>
            <p>{props.value.flavor}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

class CardsByDan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCallError: false,
      cardData: [],
      cardsToDisplay: false,
    };
  }

  getCards() {
    const rand = this.getRandomIntInclusive(0, 99);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          cardData: data,
          cardsToDisplay: true,
        });
      })
      .catch((error) => this.setState({ apiCallError: true }));
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  newCardsButton() {
    return (
      <div>
        <button onClick={() => this.getCards()}>Get New Cards!</button>
      </div>
    );
  }

  displayCards() {
    console.log('line 101');
    //console.log(this.state.cardData.cards)
    let items = [];
    let length = parseInt(this.state.cardData.cards.count);
    for (let i = 0; i < length; i++) {
      items.push(<Card value={this.state.cardData.cards[i]}></Card>);
    }
    console.log(items);
    return items;
  }

  render() {
    return (
      <div>
        <h1>Cards By Dan</h1>
        {this.newCardsButton()}
        <p>This returns a randomly selected card illustrated by the artist Dan Scott. Click the refresh button to load another card. {/*I think I'd like to change this to refresh on a set interval. Perhaps add settings for refresh timing and number of cards to display*/}</p>
        <div>
          <img src="https://media.magic.wizards.com/image_legacy_migration/sideboard/images/usnat07/scott.jpg"
            alt="Dan Scott MtG Artist"/>
          <p>
            Dan Scott is a freelance illustrator based out of the Kansas City, Missouri area. 
            Dan is one of the more prolific Magic artists, having illustrated over 200 cards for Magic:The Gathering, 
            including such iconic cards as Ponder, Solemn Simulacrum and Akroma's Memorial. 
            He's painted dozens of Hearthstone cards as well.
          </p>
        </div>
        <div className="d-inline-flex flew-wrap">
          {this.state.cardsToDisplay && this.displayCards()}
        </div>
      </div>
    );
  }
}

//function CardsByDan() {
  //return (
    //<div className="cardsByDan">
      //<div className="container">
        //<div className="row align-items-center my-5">
          //<div className="col-lg-5">
            //<h1 className="font-weight-bold">Cards By Dan</h1>
            //<p>
              //This returns a randomly selected card illustrated by the artist Dan Scott. Click the refresh button to load another card. {/*I think I'd like to change this to refresh on a set interval. Perhaps add settings for refresh timing and number of cards to display*/}
            //</p>
           // <button onClick={GetCard}>Get Card</button>
         // </div>
         // <div className="col-lg-7 text-center">
          //  <img src="https://media.magic.wizards.com/image_legacy_migration/sideboard/images/usnat07/scott.jpg"
           // alt="Dan Scott MtG Artist"/>
           // <p>
            //   Dan Scott is a freelance illustrator based out of the Kansas City, Missouri area. 
             //  Dan is one of the more prolific Magic artists, having illustrated over 200 cards for Magic:The Gathering, 
              // including such iconic cards as Ponder, Solemn Simulacrum and Akroma's Memorial. 
              // He's painted dozens of Hearthstone cards as well.
            //</p>
         // </div>
          /* <div className="cardImage text-center" id="cardImage"></div>
          <div className="cardText text-center" id="cardText"></div> *
       // </div>
      //</div>
      
   // </div>
  //);
//}

/* function GetCard() {
    //console.log(url);
    const rand = getRandomIntInclusive(0, 99);
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          //console.log(data);
          //console.log(rand);
          //console.log(data.cards[rand])
          //console.log(data.cards[rand].imageUrl)
          //CardDisplay(data.cards[rand]);
          BetterCardDisplay(data.cards[rand]);
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

function BetterCardDisplay(card) {
  document.getElementById("cardImage").innerHTML = `<img src ="${card.imageUrl}" alt="${card.name}"/>`;
  document.getElementById("cardName").innerHTML = card.name;
  document.getElementById("cardArtist").innerHTML = card.artist;
  document.getElementById("cardType").innerHTML = card.type;
  document.getElementById("cardRarity").innerHTML = card.rarity;
  document.getElementById("cardPower").innerHTML = card.power;
  document.getElementById("cardToughness").innerHTML = card.toughness;
  document.getElementById("cardSet").innerHTML = card.setName;
  document.getElementById("cardText").innerHTML = card.text;
  document.getElementById("cardLore").innerHTML = card.flavor;
}
 */
/* window.onload = function() {
    GetCard();
} */

export default CardsByDan;
