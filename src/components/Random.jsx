import React from "react";
import "../components/styles/randomStyles.css";
//import Card from "mtgsdk";
let url = "https://api.magicthegathering.io/v1/cards";
//const mtg = require('mtgsdk')

function Random() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <div className="col-lg-5">
              <h1 className="font-weight-light">Generate</h1>
              <p>
                Select what type you wish your random card to be. You may chose
                from Creatues, Lands, Enchantments, Artifacts, Instants, or all
                of the above.
              </p>
              <div className="card-type">
                <label htmlFor="card-type">Card Type:</label>
                <br />
                <select name="card-type" id="select-box" >
                  <option value="All">All Types</option>
                  <option value="Creature">Creatures</option>
                  <option value="Land">Lands</option>
                  <option value="Enchantment">Enchantments</option>
                  <option value="Artifact">Artifacts</option>
                  <option value="Instant">Instants</option>
                </select>
                <br />
              </div>
              <button onClick={rnd} className="button">Generate</button>
            </div>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Card Search</h1>
            <p>
              This returns a random generated card with the ability to select
              from a category of predefined options to filter what type of
              random Card will be displayed. This generated search chooses from
              over 5,000 Magic the Gathering cards.
            </p>
          </div>
        </div>
      </div>
      <div className="randomizer text-center">
        <section className="randomResult" id="randomResult"></section>
      </div>
    </div>
  );
}
/**
 * Generates a url consisting of the default api address and a
 * random value to use as an id within the json limit.
 * These are combined together then parsed to create elements
 * to then append to the page.
 * Uses only one API call.
 **/
function rnd() {
  let rand = Math.floor(Math.random() * 4980);
  let serchUrl = url + "/" + rand;
  let randSelected = Math.floor(Math.random() * 100);
  console.log(serchUrl);

  let page = document.getElementById("randomResult");

  //Loop through the page div to remove previous children.
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  let selectedType = document.getElementById("select-box");
  //Check the selected value for the search category.
  if (selectedType.value !== "All") {
    fetch(url + "/?types=" + selectedType.value)
      .then((response) => response.json())
      .then((data) => {
        display(data.cards[randSelected]);
      });
  } else {
    /* // For console testing to view card Json. Unnecessary Query otherwise.
  fetch(serchUrl)
    .then((response) => response.json())
    .then((data) => console.log(data.card.name));
*/

    fetch(serchUrl) // More in-depth then needed but searches through each card.
      .then((response) => response.json())
      .then((data) => {
        //Ensures it's a valid card.
        if (data.card.multiverseid !== undefined) {
          //Outputs for console viewing
          console.log(data.card);
          display(data.card);
        } else {
          console.error("Invalid card id passed.");
        }
      });
  }
}
/**
 * Appends a div created with the formatted
 * contents of the passed in card
 * to the page section while accounting 
 * for undefined input.
 * @param {*} card 
 */
function display(card) {
  let page = document.getElementById("randomResult");
  let result = document.createElement("div");
  result.classList.add("result");

  let name = document.createElement("p");
  name.classList.add("name");
  if (card.name === undefined) {
    name.innerHTML = "Unknown Name";
  } else {
    name.innerHTML = card.name;
  }

  let image = document.createElement("img");
  image.classList.add("image");
  if (card.imageUrl === undefined) {
    image.src =
      "https://i.pinimg.com/474x/ca/9c/f3/ca9cf3805131982d0b205b694022c637--magic-cards-web-browser.jpg";
  } else {
    image.src = card.imageUrl;
  }

  let desc = document.createElement("p");
  desc.classList.add("name");
  if (card.text === undefined) {
    desc.innerHTML = "No description.";
  } else {
    desc.innerHTML = card.text;
  }

  let color = document.createElement("p");
  color.classList.add("name");
  if (card.colors === undefined) {
    color.innerHTML = "Colors: N/A.";
  } else {
    color.innerHTML = "Colors: " + card.colors;
  }

  let cost = document.createElement("p");
  cost.classList.add("name");
  if (card.manaCost === undefined) {
    cost.innerHTML = "Cost: N/A";
  } else {
    cost.innerHTML = "Cost: " + card.manaCost;
  }

  let power = document.createElement("p");
  power.classList.add("name");
  if (card.power === undefined) {
    power.innerHTML = "Power: N/A";
  } else {
    power.innerHTML = "Power: " + card.power;
  }

  let rarity = document.createElement("p");
  rarity.classList.add("name");
  if (card.rarity === undefined) {
    rarity.innerHTML = "Rarity: N/A";
  } else {
    rarity.innerHTML = "Rarity: " + card.rarity;
  }

  let type = document.createElement("p");
  type.classList.add("name");
  if (card.type === undefined) {
    type.innerHTML = "Types: N/A";
  } else {
    type.innerHTML = "Types: " + card.type;
  }

  let set = document.createElement("p");
  set.classList.add("name");
  if (card.setName === undefined) {
    set.innerHTML = "Set: N/A";
  } else {
    set.innerHTML = "Set: " + card.setName;
  }

  let art = document.createElement("p");
  art.classList.add("name");
  if (card.artist === undefined) {
    art.innerHTML = "Artist: N/A";
  } else {
    art.innerHTML = "Artist: " + card.artist;
  }

  result.appendChild(name);
  result.appendChild(image);
  result.appendChild(desc);
  result.appendChild(color);
  result.appendChild(cost);
  result.appendChild(power);
  result.appendChild(rarity);
  result.appendChild(type);
  result.appendChild(set);

  page.appendChild(result);
}
export default Random;
