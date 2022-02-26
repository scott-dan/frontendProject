import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

let url = "https://api.magicthegathering.io/v1/";

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
    };
    this.handleAddingDivs = this.handleAddingDivs.bind(this);
  }

  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({
      inputValue: val,
    });
  }

  getData() {
    console.log("url: ", url + this.state.searchCategory + "?name=" + this.state.inputValue);
    console.log("url encoded input value: ", encodeURI(this.state.inputValue));
    axios.get(url + encodeURI(this.state.inputValue)).then((response) => {
      this.setState({
        characters: response.data,
      });
      console.log(this.state.characters);
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].fullName === this.state.inputValue) {
          this.setState({ character: response.data[i] });
          this.setState({ foundCharacter: true });
          this.setState({ foundCharacter: true });
          this.handleAddingDivs();
          break;
        }
      }
    });
  }

  handleAddingDivs() {
    this.setState({ count: this.state.count + 1 });
  }

  renderDivs() {
    let uiItems = [];
    if (this.state.foundCharacter) {
      uiItems.push(
        <div class="p-3">
          <img
            src={`${this.state.character.imageUrl}`}
            alt="temp"
            width="250"
            height="250"
          ></img>
          <p class="text-white font-weight-bold">
            {this.state.character.fullName}
          </p>
          <p class="text-white font-weight-bold">
            {this.state.character.title}
          </p>
        </div>
      );
    }
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
        <button onClick={() => this.getData()}>Search</button>
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
      </div>
    );
  }
}

export default Search;
