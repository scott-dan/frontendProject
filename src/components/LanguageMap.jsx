import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
  } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const BASE_URL = "https://api.magicthegathering.io/v1/cards/?name=mana";

//const BASE_URL = "https://api.magicthegathering.io/v1/cards/?name=,&language=german"; //weird url required to obtain all languages

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
        displayCount: 3,
        english: false,
        chineseS: false,
        chineseT: false,
        french: false,
        german: false,
        italian: false,
        korean: false,
        japanese: false,
        portugese: false,
        russian: false,
        spanish: false,
      };
    }
    
    mapChart() {
      return (
        <ComposableMap>
          <ZoomableGroup zoom={1.5} minZoom={1} maxZoom={5} center={[80, 30]}>
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
            <Marker hidden={!this.state.portugese} name="portugese" coordinates={[-9.2738, 38.7223]}>
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
                  {'Portugese'}
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
          console.log(data)
          this.parseCards(data.cards);
        })
        .catch((error) => this.setState({ apiCallError: true }));
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
          <input type="checkbox" id="portugese" onChange={(evt) => this.handleEvent(evt)}/>
          <label>Portugese</label><br />
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
        <div className="checklistButtons">
          <button onClick={() => this.getCards()}>Get Cards</button>
          {/*<button>Submit</button>*/}
          {/*<button type="reset" value="Reset" onClick={() => this.clearMarkers()}>Reset</button>*/}
        </div>
      );
    }

    /* clearMarkers() {
      this.setState({
        english: false,
        chineseS: false,
        chineseT: false,
        french: false,
        german: false,
        italian: false,
        korean: false,
        japanese: false,
        portugese: false,
        russian: false,
        spanish: false,
      });
      return;
    } */

    handleEvent(evt) {
      console.log(evt.target.id);
      console.log(evt.target.checked);
      //console.log(this.state);
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
        case 'portugese':
          this.setState({portugese: evt.target.checked});
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

      parseCards(cards) {
        //create new array;
        let langList = [];
        let cardList = [];
        //check all checkbox values
        let checkList = document.getElementById("checkboxContainer");
        checkList = checkList.getElementsByTagName("input");
        //console.log(checkList);
        for(let i = 0; i < checkList.length; i++) {
          //console.log(`${checkList[i].id}: ${checkList[i].checked}`);
          if(checkList[i].checked) {
            langList.push(checkList[i].id);
          }
        }
        console.log(`languages: ${langList}`);
        for(let i = 0; i < cards.length; i++) {
          if(langList.includes(cards[i].language)) {
            cardList.push(cards[i]);
          }
        }
        console.log(cardList);
      }

    render() {
        return (
          <div>
            <div className="container">
            <div className="row align-items-center my-5">
            <h1>Language Map</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.</p>
            <div className="col-lg-2">
                {this.checkbox()}
            </div>
            <div className="col-lg-10">
            {this.mapChart()}
            </div>
            </div>
            </div>
            <div className="d-inline-flex flex-wrap">
              {/* {this.state.mapToDisplay && this.displayCards()} */}
            </div>
          </div>
        );
      }
}

export default LanguageMap;
