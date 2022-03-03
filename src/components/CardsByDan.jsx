import React from "react";

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
      displayCount: 3,
      refreshRate: 0,
    };
  }

  getCards() {
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

  newCardsButton() {
    return (
      <div>
        <button onClick={() => this.getCards()}>Get Cards!</button>
      </div>
    );
  }

  displayCards() {
    let items = [];
    let cards = this.state.cardData.cards;
    cards = this.FisherYatesShuffle(this.state.cardData.cards);
      for (let i = 0; i < this.state.displayCount; i++) {
      items.push(<Card value={cards[i]}></Card>);
    }
    return items;
  }

  FisherYatesShuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  displayCounter() {
    return (
      <div>
        <br />
        <label htmlFor="displayCount">Number of Cards to Display (1-100):</label>
        <br />
        <input
          type="number"
          id="displayCount"
          min="1"
          max="100"
          step="1"
          onChange={(evt) => this.updateDisplayCount(evt)}
        ></input>
        {this.newCardsButton()}  
      </div>
    );
  }

  updateDisplayCount(evt) {
    const count = evt.target.value;
    this.setState({displayCount: count,});
  }

  render() {
    return (
      <div>
        <h1>Cards By Dan</h1>
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
        <div>
          {this.displayCounter()}
          <p>This returns a randomly selected card illustrated by the artist Dan Scott. Click the refresh button to load another card.</p>
           {/*I think I'd like to change this to refresh on a set interval. Perhaps add settings for refresh timing and number of cards to display*/}
        </div>
        <div className="d-inline-flex flex-wrap">
          {this.state.cardsToDisplay && this.displayCards()}
        </div>
      </div>
    );
  }
}

export default CardsByDan;
