import React from "react";
import axios from "axios";
import "../components/styles/manaStyles.css";

let url = "https://api.magicthegathering.io/v1/";
class Mana extends React.Component {
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
      blackCardSearchResultsReadyToRender: false,
      whiteCardSearchResultsReadyToRender: false,
      redCardSearchResultsReadyToRender: false,
      greenCardSearchResultsReadyToRender: false,
      blueCardSearchResultsReadyToRender: false,
      blackCardsSearchResponse: [],
      whiteCardsSearchResponse: [],
      redCardsSearchResponse: [],
      greenCardsSearchResponse: [],
      blueCardsSearchResponse: [],
    };
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  renderBlackManaDiv() {
    let uiItems = [];
    let length = parseInt(this.state.blackCardsSearchResponse.headers.count);
    for (let i = 0; i < length; i++) {
      if (
        this.state.blackCardsSearchResponse.data.cards[i].hasOwnProperty(
          "imageUrl"
        )
      ) {
        uiItems.push(
          <img
            className="img-expand" key={i}
            src={this.state.blackCardsSearchResponse.data.cards[i].imageUrl}
            alt={this.state.blackCardsSearchResponse.data.cards[i].name}
          ></img>
        );
      }
    }
    return uiItems;
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  renderWhiteManaDiv() {
    let uiItems = [];
    let length = parseInt(this.state.whiteCardsSearchResponse.headers.count);
    for (let i = 0; i < length; i++) {
      if (
        this.state.whiteCardsSearchResponse.data.cards[i].hasOwnProperty(
          "imageUrl"
        )
      ) {
        uiItems.push(
          <img
            className="img-expand"key={i}
            src={this.state.whiteCardsSearchResponse.data.cards[i].imageUrl}
            alt={this.state.whiteCardsSearchResponse.data.cards[i].name}
          ></img>
        );
      }
    }
    return uiItems;
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  renderRedManaDiv() {
    let uiItems = [];
    let length = parseInt(this.state.redCardsSearchResponse.headers.count);
    for (let i = 0; i < length; i++) {
      if (
        this.state.redCardsSearchResponse.data.cards[i].hasOwnProperty(
          "imageUrl"
        )
      ) {
        uiItems.push(
          <img
            className="img-expand" key={i}
            src={this.state.redCardsSearchResponse.data.cards[i].imageUrl}
            alt={this.state.redCardsSearchResponse.data.cards[i].name}
          ></img>
        );
      }
    }
    return uiItems;
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  renderGreenManaDiv() {
    let uiItems = [];
    let length = parseInt(this.state.greenCardsSearchResponse.headers.count);
    for (let i = 0; i < length; i++) {
      if (
        this.state.greenCardsSearchResponse.data.cards[i].hasOwnProperty(
          "imageUrl"
        )
      ) {
        uiItems.push(
          <img
            className="img-expand" key={i}
            src={this.state.greenCardsSearchResponse.data.cards[i].imageUrl}
            alt={this.state.greenCardsSearchResponse.data.cards[i].name}
          ></img>
        );
      }
    }
    return uiItems;
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  renderBlueManaDiv() {
    let uiItems = [];
    let length = parseInt(this.state.blueCardsSearchResponse.headers.count);
    for (let i = 0; i < length; i++) {
      if (
        this.state.blueCardsSearchResponse.data.cards[i].hasOwnProperty(
          "imageUrl"
        )
      ) {
        uiItems.push(
          <img
            className="img-expand" key={i}
            src={this.state.blueCardsSearchResponse.data.cards[i].imageUrl}
            alt={this.state.blueCardsSearchResponse.data.cards[i].name}
          ></img>
        );
      }
    }
    return uiItems;
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  processSearch(response, mana) {
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
    });

    switch (mana) {
      case "B":
        this.setState({
          blackCardsSearchResponse: response,
          blackCardSearchResultsReadyToRender: true,
        });
        break;
      case "W":
        this.setState({
          whiteCardsSearchResponse: response,
          whiteCardSearchResultsReadyToRender: true,
        });
        break;
      case "R":
        this.setState({
          redCardsSearchResponse: response,
          redCardSearchResultsReadyToRender: true,
        });
        break;
      case "G":
        this.setState({
          greenCardsSearchResponse: response,
          greenCardSearchResultsReadyToRender: true,
        });
        break;
      case "U":
        this.setState({
          blueCardsSearchResponse: response,
          blueCardSearchResultsReadyToRender: true,
        });
        break;
      default:
        return;
    }
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  getData(mana) {
    let fullSearchUrl = url + "cards?colorIdentity=" + mana;
    axios
      .get(fullSearchUrl)
      .then((response) => {
        this.processSearch(response, mana);
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getData("B");
    this.getData("W");
    this.getData("R");
    this.getData("G");
    this.getData("U");
  }

  render() {
    return (
      <div className="d-inline-flex flex-wrap justify-content-evenly bg">
        <div>
          <br />
          <br />
          <h1>Black Mana</h1>
          <br />
          {this.state.blackCardSearchResultsReadyToRender &&
            this.renderBlackManaDiv()}
          <br />
        </div>
        <div>
          <br />
          <br />
          <h1>White Mana</h1>
          <br />
          {this.state.whiteCardSearchResultsReadyToRender &&
            this.renderWhiteManaDiv()}
          <br />
        </div>
        <div>
          <br />
          <br />
          <h1>Red Mana</h1>
          <br />
          {this.state.redCardSearchResultsReadyToRender &&
            this.renderRedManaDiv()}
          <br />
        </div>
        <div>
          <br />
          <br />
          <h1>Green Mana</h1>
          <br />
          {this.state.greenCardSearchResultsReadyToRender &&
            this.renderGreenManaDiv()}
          <br />
        </div>
        <div>
          <br />
          <br />
          <h1>Blue Mana</h1>
          <br />
          {this.state.blueCardSearchResultsReadyToRender &&
            this.renderBlueManaDiv()}
          <br />
        </div>
      </div>
    );
  }
}

export default Mana;
  