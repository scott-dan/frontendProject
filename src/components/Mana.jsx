import React from "react";
import axios from "axios";

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
      rawSearchResponse: [],
      newSearchResultsToRender: false,
    };
  }

  /**
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  renderDivs() {
    let uiItems = [];
    let length = parseInt(this.state.rawSearchResponse.headers.count);
    for (let i = 0; i < length; i++) {
      if (
        this.state.rawSearchResponse.data.cards[i].hasOwnProperty("imageUrl")
      ) {
        uiItems.push(
          <img
            src={this.state.rawSearchResponse.data.cards[i].imageUrl}
            alt={this.state.rawSearchResponse.data.cards[i].name}
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
   * Summary.
   *
   * Description.
   *
   * @return {type} Return value description.
   */
  getData(mana) {
    let fullSearchUrl = url + "cards" + "?" + "colorIdentity" + "=" + mana;
    axios
      .get(fullSearchUrl)
      .then((response) => {
        //console.log(response);
        this.processSearch(response);
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getData("B");
  }

  render() {
    return (
      <div className="d-inline-flex flex-wrap justify-content-evenly">
        {this.state.newSearchResultsToRender && this.renderDivs()}
      </div>
    );
  }
}

export default Mana;
