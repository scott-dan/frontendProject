import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/searchStyles.css";
import { noSpecialCharacters } from "./regex.jsx";

let url = "https://api.magicthegathering.io/v1/";

/**
 * Card function component used to display magic the gathering
 *  card data on the UI.
 *
 * Description.
 *
 * @return {type} Return value description.
 */
function Card(props) {
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
              className="img-expand"
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
      <br />
      <br />
    </div>
  );
}

/**
 * This class contains all the functions and methods to execute
 * a search, validate and transform data, and display it on
 * the UI, except for the Card function component.
 *
 * Description.
 *
 * @return {type} Return value description.
 */
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCategory: "",
      showSearchBar: false,
      showNumericRangeInput: false,
      showRaritySelectorDDL: false,
      inputValue: [],
      searchString: "",
      foundCharacter: false,
      count: 0,
      badUserInput: false,
      noUserInput: false,
      apiCallError: false,
      noSearchResultsFound: false,
      searchResults: [],
      rawSearchResponse: [],
      newSearchResultsToRender: false,
    };
  }

  /**
   * retrieve user input and save it in class state variable.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({
      inputValue: val,
    });
  }

  /**
   * User regular expressions to validate user input. Only alpha numeric
   * characters are allowed. Aso takes care of extra whitespace.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
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
      this.setState({
        badUserInput: false,
        noUserInput: false,
        noSearchResultsFound: false,
      });
      this.getData();
    }
  }

  /**
   * Set necessary state depending on outcome of api search call.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  processSearch(response) {
    if (response.headers.count === "0") {
      this.setState({
        noSearchResultsFound: true,
        searchString: this.state.inputValue,
      });
      return;
    }
    this.setState({
      apiCallError: false,
      noSearchResultsFound: false,
      newSearchResultsToRender: true,
      rawSearchResponse: response,
    });
  }

  /**
   * Retrieve magic the gathering card data from the API based
   * on the user search parameters.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  getData() {
    let fullSearchUrl =
      url +
      "cards" +
      "?" +
      this.state.searchCategory +
      "=" +
      encodeURI(this.state.inputValue.replace(/\s+/g, " ").trim());
    axios
      .get(fullSearchUrl)
      .then((response) => {
        this.processSearch(response);
      })
      .catch((error) => this.setState({ apiCallError: true }));
  }

  /**
   * Place all card data into html containers right before rendering.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  renderDivs() {
    let uiItems = [];
    let length = parseInt(this.state.rawSearchResponse.headers.count);
    let responseData = this.state.rawSearchResponse;
    for (let i = 0; i < length; i++) {
      if (this.state.rawSearchResponse.data.cards[i].imageUrl === undefined) {
        responseData.data.cards[i].imageUrl =
          "https://i.pinimg.com/474x/ca/9c/f3/ca9cf3805131982d0b205b694022c637--magic-cards-web-browser.jpg";
      }
      uiItems.push(<Card key={i} value={responseData.data.cards[i]}></Card>);
    }
    return uiItems;
  }

  /**
   * Update user input state variables depending on user selection.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  handleDDLChange(event) {
    if (event.target.value === "toughness" || event.target.value === "power") {
      this.setState({
        showSearchBar: false,
        showRaritySelectorDDL: false,
        showNumericRangeInput: true,
      });
    } else if (event.target.value === "rarity") {
      this.setState({
        showSearchBar: false,
        showNumericRangeInput: false,
        showRaritySelectorDDL: true,
      });
    } else {
      this.setState({
        showSearchBar: true,
        showNumericRangeInput: false,
        showRaritySelectorDDL: false,
      });
    }
    this.setState({ searchCategory: event.target.value });
  }

  /**
   * Function component for user search button.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  searchButton() {
    return (
      <div>
        <button onClick={() => this.validateUserInput()}>Search</button>
      </div>
    );
  }

  /**
   * .Function component for search bar
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  searchBar() {
    return (
      <div>
        <br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(evt) => this.updateInputValue(evt)}
        ></input>
        {this.searchButton()}
      </div>
    );
  }

  /**
   * Function component for adjustable numeric input.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  numericRangeInput() {
    return (
      <div>
        <br />
        <label for="numericRangeInput">Range: 0-99</label>
        <br />
        <input
          type="number"
          id="numericRangeInput"
          min="0"
          max="99"
          step="1"
          onChange={(evt) => this.updateInputValue(evt)}
        ></input>
        {this.searchButton()}
      </div>
    );
  }

  /**
   * Function component for rarity drop down list.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  raritySelectorDDL() {
    return (
      <div>
        <br />
        <select onChange={(evt) => this.updateInputValue(evt)}>
          <option>common</option>
          <option>uncommon</option>
          <option>rare</option>
        </select>
        {this.searchButton()}
      </div>
    );
  }

  render() {
    return (
      <div className="bg">
        <h1>Searchpage</h1>
        <div>
          <select onChange={(event) => this.handleDDLChange(event)}>
            <option value="none" default disabled hidden>
              Select a search category
            </option>
            <option>name</option>
            <option>artist</option>
            <option>type</option>
            <option>rarity</option>
            <option>power</option>
            <option>toughness</option>
            <option value="text">description</option>
          </select>
          <br />
          {this.state.showNumericRangeInput ? this.numericRangeInput() : null}
          {this.state.showSearchBar ? this.searchBar() : null}
          {this.state.showRaritySelectorDDL ? this.raritySelectorDDL() : null}
        </div>
        <div>
          {this.state.badUserInput && (
            <p>
              Error: no special characters allowed in search. Please try again.
            </p>
          )}
          {this.state.noUserInput && (
            <p>Please enter parameter before searching.</p>
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
        <div className="d-inline-flex flex-wrap justify-content-evenly">
          {this.state.newSearchResultsToRender && this.renderDivs()}
        </div>
      </div>
    );
  }
}

export default Search;
