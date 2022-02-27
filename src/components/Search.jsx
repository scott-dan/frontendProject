import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { noSpecialCharacters, validEmail, validPassword } from "./regex.jsx";

let url = "https://api.magicthegathering.io/v1/";

function Card(props) {
  return (
    <div>
      <img src={props.value}></img>
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
    uiItems.push(
      <div class="p-3">
        <Card value={this.state.rawCardData.cards[0].imageUrl}></Card>
        <div></div>
      </div>
    );

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
        <div>{this.state.newCardsToRender && this.renderDivs()}</div>
      </div>
    );
  }
}

export default Search;
