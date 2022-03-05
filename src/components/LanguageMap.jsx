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

const markers = [
{ markerOffset: 7, name: "English", coordinates: [0.1276, 51.5072] },
{ markerOffset: 7, name: "Simplified Chinese", coordinates: [116.4074, 39.9042] },
{ markerOffset: 7, name: "Traditional Chinese", coordinates: [114.1850, 36.0736] },
{ markerOffset: 7, name: "French", coordinates: [2.3522, 48.8566] },
{ markerOffset: 7, name: "German", coordinates: [13.4050, 52.5200] },
{ markerOffset: 7, name: "Italian", coordinates: [9.1900, 45.4642] },
{ markerOffset: 7, name: "Korean", coordinates: [126.9780, 37.5665] },
{ markerOffset: 7, name: "Japanese", coordinates: [139.6503, 35.6762] },
{ markerOffset: 7, name: "Portugese", coordinates: [9.1393, 38.7223] },
{ markerOffset: 7, name: "Russian", coordinates: [37.6173, 55.7558] },
{ markerOffset: 7, name: "Spanish", coordinates: [3.7038, 40.4168] },
];

const MapChart = () => {
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
          {/*Check each marker state, if checked, add script to render marker here */}
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
          <Marker coordinates={[126.9780, 37.5665]}>
        <circle r={8} fill="#F53" style={{hidden: { display: "none" }, }}/>
      </Marker>
        </ZoomableGroup>
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

    checkbox() { //add onchange event handlers for checkboxes to allow display toggle for language markers on map      
      return (
                <div className="checklist">
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
                </div>
        )
    }
    buttons() {
      return (
        <div className="checklistButtons">
          {/* <button onClick={this.buildQuery()}>Submit</button> */}
          <button>Submit</button>
          <input type="reset" value="Reset"/>
        </div>
      )
    }

    handleEvent(evt) {
      console.log(evt.target.id);
      console.log(evt.target.checked);
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

      buildQuery() {
        console.log('line 244');
        //create new string
        let queryString = '';
        //check all checkbox states
        /* Object.keys(this.state.item).map(function (key) {
          let myItem = this.state.item[key];
          console.log(myItem); */
          /* if(myItem.checked === true) {
            queryString += 
          } */
        //})
          //if state is checked append query value to string
        //concatenate new string with base url
        //return query string
      }


      /* console.log(checkboxState)
      const val = evt.target.checked;
      console.log(val)
      this.setState({checkboxState: val,});
      console.log(this.state.english)
    }  */

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
                {this.buttons()}
            </div>
            <div className="col-lg-10">
            <MapChart />
            {/* <Marker coordinates={[-74.006, 40.7128]}>
              <circle r={8} fill="#F53" />
            </Marker> */}
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
