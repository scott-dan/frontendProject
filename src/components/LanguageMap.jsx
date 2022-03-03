import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
  } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
{ markerOffset: 15, name: "English", coordinates: [-77.0369, 38.9072] },
{ markerOffset: 15, name: "Simplified Chinese", coordinates: [116.4074, 39.9042] },
{ markerOffset: 15, name: "Traditional Chinese", coordinates: [114.1850, 36.0736] },
{ markerOffset: 15, name: "French", coordinates: [2.3522, 48.8566] },
{ markerOffset: 15, name: "German", coordinates: [13.4050, 52.5200] },
{ markerOffset: 15, name: "Italian", coordinates: [9.1900, 45.4642] },
{ markerOffset: 15, name: "Korean", coordinates: [126.9780, 37.5665] },
{ markerOffset: 15, name: "Japanese", coordinates: [139.6503, 35.6762] },
{ markerOffset: 15, name: "Portugese", coordinates: [9.1393, 38.7223] },
{ markerOffset: 15, name: "Russian", coordinates: [37.6173, 55.7558] },
{ markerOffset: 15, name: "Spanish", coordinates: [3.7038, 40.4168] },
];

const MapChart = () => {
    return (
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => 
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F5CE42"
                  stroke="#42A1F5"
                />
              )
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
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
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    );
  };

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
        displayCount: 3,
      };
    }

    getCards(langArgs) {
        let apiCall = BASE_URL + langArgs;
        fetch(apiCall)
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

    checkbox() {
        return (
            <form>
                <div className="checklist">
                    <input type="checkbox" id="english" />
                    <label>English</label><br />
                    <input type="checkbox" id="chineseS" />
                    <label>Chinese (Simplified)</label><br />
                    <input type="checkbox" id="chineseT" />
                    <label>Chinese (Traditional)</label><br />
                    <input type="checkbox" id="french" />
                    <label>French</label><br />
                    <input type="checkbox" id="german" />
                    <label>German</label><br />
                    <input type="checkbox" id="italian" />
                    <label>Italian</label><br />
                    <input type="checkbox" id="korean" />
                    <label>Korean</label><br />
                    <input type="checkbox" id="japanese" />
                    <label>Japanese</label><br />
                    <input type="checkbox" id="portugese" />
                    <label>Portugese</label><br />
                    <input type="checkbox" id="russian" />
                    <label>Russian</label><br />
                    <input type="checkbox" id="spanish" />
                    <label>Spanish</label><br />
                </div>
                
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset"/>
            </form>
        )
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
            <MapChart />
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
