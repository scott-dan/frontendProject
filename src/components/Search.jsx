import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/searchStyles.css";
import { noSpecialCharacters, validEmail, validPassword } from "./regex.jsx";

let url = "https://api.magicthegathering.io/v1/";

function Card(props) {
  return (
    <div>
      <section class="grid-container">
        <div class="grid-item item1">
          <img
            src={props.value.imageUrl}
            alt={`${props.value.name}`}
            height="300"
            width="200"
          ></img>
        </div>
        <div class="grid-item item2">
          <strong>Artist:&nbsp;</strong>
          <p>{props.value.artist}</p>
        </div>
        <div class="grid-item item3">
          <strong>Lore:&nbsp;</strong>
          <p>{props.value.flavor}</p>
        </div>
        <div class="grid-item item4">
          <strong>Type:&nbsp;</strong>
          {props.value.originalType}
        </div>
        <div class="grid-item item5">
          <strong>Rarity:&nbsp;</strong>
          {props.value.rarity}
        </div>
        <div class="grid-item item6">
          <strong>Set:&nbsp;</strong>
          <p>{props.value.setName}</p>
        </div>
        <div class="grid-item item7">
          <strong>Power:&nbsp;</strong>
          <p>{props.value.power}</p>
        </div>
        <div class="grid-item item8">
          <strong>Toughness:&nbsp;</strong>
          <p>{props.value.toughness}</p>
        </div>
        <div class="grid-item item10">
          <strong>Description:&nbsp;</strong>
          {props.value.originalText}
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
      character: [],
      inputValue: [],
      foundCharacter: false,
      count: 0,
      badUserInput: false,
      apiCallError: false,
      searchResults: [],
      rawCardData: [],
      newCardsToRender: false,
    };
    this.handleAddingDivs = this.handleAddingDivs.bind(this);
  }

  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({
      inputValue: val,
    });
  }

  validateUserInput() {
    console.log(noSpecialCharacters.test(this.state.inputValue));
    if (!noSpecialCharacters.test(this.state.inputValue)) {
      this.setState({ badUserInput: true });
      console.log("badUserInput:", this.state.badUserInput);
    } else {
      this.setState({ badUserInput: false }, this.getData());
    }
  }

  getData() {
    console.log(
      "url: ",
      url +
        this.state.searchCategory +
        "?name=" +
        encodeURI(this.state.inputValue)
    );
    console.log("url encoded input value: ", encodeURI(this.state.inputValue));
    //
    let temp =
      url +
      this.state.searchCategory +
      "?name=" +
      encodeURI(this.state.inputValue);
    axios
      .get(temp)
      .then((response) => {
        this.setState({
          characters: response.data,
          apiCallError: false,
        });
        console.log(this.state.characters);
        this.setState({ newCardsToRender: true, rawCardData: response.data });
      })
      .catch((error) => this.setState({ apiCallError: true }));
  }

  handleAddingDivs() {
    this.setState({ count: this.state.count + 1 });
  }

  renderDivs() {
    let temp = this.state.rawCardData;
    console.log("raw card data: ", this.state.rawCardData.cards[0].imageUrl);
    let uiItems = [];
    for (let i = 0; i < this.state.rawCardData.cards.length; i++) {
      //if (this.state.rawCardData.cards[i].imageUrl !== null) {
      uiItems.push(
        <div class="p-3">
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
          {this.state.apiCallError && (
            <p>Error: failed to retrieve card data. Please try again.</p>
          )}
        </div>
        <div class="d-inline-flex flex-wrap">
          {this.state.newCardsToRender && this.renderDivs()}
        </div>
      </div>
    );
  }
}

export default Search;