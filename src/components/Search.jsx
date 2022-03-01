import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/searchStyles.css";
import { noSpecialCharacters } from "./regex.jsx";

let url = "https://api.magicthegathering.io/v1/";

function Card(props) {
  return (
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
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCategory: "",
      showSearchBar: false,
      inputValue: [],
      searchString: "",
      foundCharacter: false,
      count: 0,
      badUserInput: false,
      noUserInput: false,
      apiCallError: false,
      noSearchResultsFound: false,
      searchResults: [],
      rawCardData: [],
      newCardsToRender: false,
    };
  }

  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({
      inputValue: val,
    });
  }

  validateUserInput() {
    if (this.state.inputValue.length === 0) {
      console.log("no input detected.");
      this.setState({
        badUserInput: false,
        noUserInput: true,
        noSearchResultsFound: false,
      });
    } else if (this.state.inputValue.trim().length === 0) {
      console.log("only white space detected.");
      this.setState({
        badUserInput: false,
        noUserInput: true,
        noSearchResultsFound: false,
      });
    } else if (!noSpecialCharacters.test(this.state.inputValue)) {
      this.setState({
        badUserInput: true,
        noUserInput: false,
        noSearchResultsFound: false,
      });
      console.log("badUserInput:", this.state.badUserInput);
    } else {
      this.setState(
        {
          badUserInput: false,
          noUserInput: false,
          noSearchResultsFound: false,
        },
        this.getData()
      );
    }
  }

  getData() {
    let fullSearchUrl =
      url +
      this.state.searchCategory +
      "?name=" +
      encodeURI(this.state.inputValue.replace(/\s+/g, " ").trim());
    axios
      .get(fullSearchUrl)
      .then((response) => {
        if (response.data.cards.length === 0) {
          this.setState({
            noSearchResultsFound: true,
            searchString: this.state.inputValue,
          });
          return;
        }
        this.setState({
          apiCallError: false,
          noSearchResultsFound: false,
          newCardsToRender: true,
          rawCardData: response.data,
        });
      })
      .catch((error) => this.setState({ apiCallError: true }));
  }

  renderDivs() {
    let temp = this.state.rawCardData;
    console.log("raw card data: ", this.state.rawCardData.cards[0].imageUrl);
    let uiItems = [];
    for (let i = 0; i < this.state.rawCardData.cards.length; i++) {
      //if (this.state.rawCardData.cards[i].imageUrl !== null) {
      uiItems.push(
        <div className="p-3">
          <Card value={this.state.rawCardData.cards[i]}></Card>
          <br />
          <br />
        </div>
      );
    }
    //}
    return uiItems;
  }

  handleDDLChange(event) {
    this.setState({ searchCategory: event.target.value, showSearchBar: true });
  }

  searchBar() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(evt) => this.updateInputValue(evt)}
        ></input>
        <button onClick={() => this.validateUserInput()}>Search</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Searchpage</h1>
        <div>
          <select onChange={(event) => this.handleDDLChange(event)}>
            <option value="none" selected disabled hidden>
              Select a search category
            </option>
            <option>cards</option>
            <option>sets</option>
            <option>types</option>
            <option>subtypes</option>
            <option>supertypes</option>
            <option>formats</option>
          </select>
          <br />
          {this.state.showSearchBar ? this.searchBar() : null}
        </div>
        <div>
          {this.state.badUserInput && (
            <p>
              Error: no special characters allowed in search. Please try again.
            </p>
          )}
          {this.state.noUserInput && (
            <p>Please enter keywords before searching.</p>
          )}
          {this.state.apiCallError && (
            <p>Error: failed to retrieve card data. Please try again.</p>
          )}
          {this.state.noSearchResultsFound && (
            <p>
              No results found for "{this.state.searchString}". Please try
              again.
            </p>
          )}
        </div>
        <div className="d-inline-flex flex-wrap">
          {this.state.newCardsToRender && this.renderDivs()}
        </div>
      </div>
    );
  }
}

export default Search;
