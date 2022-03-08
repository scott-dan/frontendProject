import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
  } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const BASE_URL = "https://api.magicthegathering.io/v1/cards/?";

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

  class LanguageMap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        apiCallError: false,
        cardData: [],
        cardsToDisplay: false,
        english: false,
        chineseS: false,
        chineseT: false,
        french: false,
        german: false,
        italian: false,
        korean: false,
        japanese: false,
        portuguese: false,
        russian: false,
        spanish: false,
      };
    }
    
    mapChart() {
      return (
        <ComposableMap>
          <ZoomableGroup zoom={1.5} minZoom={1.5} maxZoom={1.5} center={[80, 30]}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies
                .filter(d => d.properties.REGION_UN === "Europe" 
                          || d.properties.REGION_UN === "Asia")
                .map(geo => 
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#F5CE42"
                      stroke="#42A1F5"
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  )
              }
            </Geographies>
            <Marker hidden={!this.state.english} name="english" coordinates={[0.1276, 51.5072]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'English'}
                </text>
            </Marker>
            <Marker hidden={!this.state.chineseS} name="chineseS" coordinates={[116.4074, 39.9042]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Chinese (Simplified)'}
                </text>
            </Marker>
            <Marker hidden={!this.state.chineseT} name="chineseT" coordinates={[114.1850, 36.0736]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Chinese (Traditional)'}
                </text>
            </Marker>
            <Marker hidden={!this.state.french} name="french" coordinates={[2.3522, 48.8566]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'French'}
                </text>
            </Marker>
            <Marker hidden={!this.state.german} name="german" coordinates={[13.4050, 52.5200]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'German'}
                </text>
            </Marker>
            <Marker hidden={!this.state.italian} name="italian" coordinates={[9.1900, 45.4642]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Italian'}
                </text>
            </Marker>
            <Marker hidden={!this.state.korean} name="korean" coordinates={[126.9780, 37.5665]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Korean'}
                </text>
            </Marker>
            <Marker hidden={!this.state.japanese} name="japanese" coordinates={[139.6503, 35.6762]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Japanese'}
                </text>
            </Marker>
            <Marker hidden={!this.state.portuguese} name="portuguese" coordinates={[-9.2738, 38.7223]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Portuguese'}
                </text>
            </Marker>
            <Marker hidden={!this.state.russian} name="russian" coordinates={[37.6173, 55.7558]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Russian'}
                </text>
            </Marker>
            <Marker hidden={!this.state.spanish} name="spanish" coordinates={[-3.8504, 40.3786]}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y='7'
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {'Spanish'}
                </text>
            </Marker>
          </ZoomableGroup>
        </ComposableMap>
      );
    }

    getCards() {
      let apiCall = BASE_URL;
      fetch(apiCall)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            cardData: data, 
            cardsToDisplay: true
          });
        })
        .catch((error) => this.setState({ apiCallError: true, cardsToDisplay: false }));
    }

    displayHeader(header){
      return (
        <div>
          <h1>{header}</h1>
        </div>
      );
    }

    displayCards() {
      let cards = this.state.cardData.cards;
      let items = [];
      let rand = this.getRandomIntInclusive(0, 99);
      cards = this.FisherYatesShuffle(cards);
      for(let i = rand; i < rand + 3; i++){
        if(cards[i].imageUrl === undefined){
          cards[i].imageUrl = "https://i.pinimg.com/474x/ca/9c/f3/ca9cf3805131982d0b205b694022c637--magic-cards-web-browser.jpg";
        }
        items.push(<Card key={i} value={cards[i]}></Card>);
      }
      return items;
    }

    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
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

    checkbox() {      
      return (
        <div className="checkboxContainer" id="checkboxContainer">
          <input type="checkbox" id="english" onChange={(evt) => this.handleEvent(evt)}/>
          <label>English</label><br />
          <input type="checkbox" id="chineseS" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Chinese (Simplified)</label><br />
          <input type="checkbox" id="chineseT" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Chinese (Traditional)</label><br />
          <input type="checkbox" id="french"onChange={(evt) => this.handleEvent(evt)}/>
          <label>French</label><br />
          <input type="checkbox" id="german" onChange={(evt) => this.handleEvent(evt)}/>
          <label>German</label><br />
          <input type="checkbox" id="italian" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Italian</label><br />
          <input type="checkbox" id="korean" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Korean</label><br />
          <input type="checkbox" id="japanese" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Japanese</label><br />
          <input type="checkbox" id="portuguese" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Portuguese</label><br />
          <input type="checkbox" id="russian" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Russian</label><br />
          <input type="checkbox" id="spanish" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Spanish</label><br />
          {this.buttons()}
        </div>
        );
    }
    buttons() {
      return (
        <div>
          <button onClick={() => this.getCards()}>Get Cards</button>
        </div>
      );
    }

    handleEvent(evt) {
      switch (evt.target.id) {
        case 'english':
          this.setState({english: evt.target.checked});
          break;
        case 'chineseS':
          this.setState({chineseS: evt.target.checked});
          break;
        case 'chineseT':
          this.setState({chineseT: evt.target.checked});
          break;
        case 'french':
          this.setState({french: evt.target.checked});
          break;
          case 'german':
        this.setState({german: evt.target.checked});
        break;
        case 'italian':
          this.setState({italian: evt.target.checked});
          break;
        case 'korean':
          this.setState({korean: evt.target.checked});
          break;
        case 'japanese':
          this.setState({japanese: evt.target.checked});
          break;
        case 'portuguese':
          this.setState({portuguese: evt.target.checked});
          break;
        case 'russian':
          this.setState({russian: evt.target.checked});
          break;
        case 'spanish':
          this.setState({spanish: evt.target.checked});
          break;
        default:
          console.log('No checkbox interacted with');
      }
    }

    render() {
      return (
        <div>
          <div className="container">
            <div className="row align-items-center my-5">
              <h1>Language Map</h1>
              <p>This page will display 3 randomly selected cards from each user-selected language.
              </p>
              <div className="col-lg-2">
                {this.checkbox()}
              </div>
              <div className="col-lg-10">
                {this.mapChart()}
              </div>
            </div>
          </div>
          {this.state.english && this.state.cardsToDisplay && this.displayHeader("English")}
          <div className="d-inline-flex flex-wrap">
            {this.state.english && this.state.cardsToDisplay && this.displayCards()}
          </div>

          {this.state.chineseS && this.state.cardsToDisplay && this.displayHeader("Chinese Simplified")}
          <div className="d-inline-flex flex-wrap">
            {this.state.chineseS && this.state.cardsToDisplay && this.displayCards()}
          </div>
          
          {this.state.chineseT && this.state.cardsToDisplay && this.displayHeader("Chinese Traditional")}
          <div className="d-inline-flex flex-wrap">
            {this.state.chineseT && this.state.cardsToDisplay && this.displayCards()}
          </div>
          
          {this.state.french && this.state.cardsToDisplay && this.displayHeader("French")}
          <div className="d-inline-flex flex-wrap">
            {this.state.french && this.state.cardsToDisplay && this.displayCards()}
          </div>
          
          {this.state.german && this.state.cardsToDisplay && this.displayHeader("German")}
          <div className="d-inline-flex flex-wrap">
            {this.state.german && this.state.cardsToDisplay && this.displayCards()}
          </div>
          
          {this.state.italian && this.state.cardsToDisplay && this.displayHeader("Italian")}
          <div className="d-inline-flex flex-wrap">
            {this.state.italian && this.state.cardsToDisplay && this.displayCards()}
          </div>          
          
          {this.state.korean && this.state.cardsToDisplay && this.displayHeader("Korean")}
          <div className="d-inline-flex flex-wrap">
            {this.state.korean && this.state.cardsToDisplay && this.displayCards()}
          </div>
          
          {this.state.japanese && this.state.cardsToDisplay && this.displayHeader("Japanese")}
          <div className="d-inline-flex flex-wrap">
            {this.state.japanese && this.state.cardsToDisplay && this.displayCards()}
          </div>
                    
          {this.state.portuguese && this.state.cardsToDisplay && this.displayHeader("Portuguese")}
          <div className="d-inline-flex flex-wrap">
            {this.state.portuguese && this.state.cardsToDisplay && this.displayCards()}
          </div>
          
          {this.state.russian && this.state.cardsToDisplay && this.displayHeader("Russian")}
          <div className="d-inline-flex flex-wrap">
            {this.state.russian && this.state.cardsToDisplay && this.displayCards()}
          </div>
                    
          {this.state.spanish && this.state.cardsToDisplay && this.displayHeader("Spanish")}
          <div className="d-inline-flex flex-wrap">
            {this.state.spanish && this.state.cardsToDisplay && this.displayCards()}
          </div>
        </div>
      );
    }
}

export default LanguageMap;
