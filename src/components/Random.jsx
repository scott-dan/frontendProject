import React from "react";
import "../components/styles/randomStyles.css";
let url = "https://api.magicthegathering.io/v1/cards";

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
                <select name="card-type" id="select-box">
                  <option value="All">All Types</option>
                  <option value="Creature">Creatures</option>
                  <option value="Land">Lands</option>
                  <option value="Enchantment">Enchantments</option>
                  <option value="Artifact">Artifacts</option>
                  <option value="Instant">Instants</option>
                </select>
                <br />
              </div>
              <button onClick={rnd} className="button">
                Generate
              </button>
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
      <div className="template">
        <div className="p-3 holder">
          <div>
            <section className="grid-container" id="randomResult"></section>
          </div>
        </div>
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
  //Generating two random values for database-wide & query-wide searches.
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
        //Obtains 1 of 4980 cards by directly interfacing with the JSON
        display(data.cards[randSelected]);
      });
  } else {
    // More in-depth then needed but searches through each card.
    fetch(serchUrl) 
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
 * grid contents of the passed in card
 * to the grid container section while accounting
 * for undefined or N/A input and including 
 * placeholders when applicable.
 */
function display(card) {
  let page = document.getElementById("randomResult");
  let result = document.createElement("div");
  result.classList.add("result");

  //Starts the creation of the grid elements
  let image = document.createElement("img");
  let grid1 = document.createElement("div");
  image.classList.add("image-expand");
  image.height = 300;
  image.width = 200;
  if (card.imageUrl === undefined) {
    image.src =
      "https://i.pinimg.com/474x/ca/9c/f3/ca9cf3805131982d0b205b694022c637--magic-cards-web-browser.jpg";
    image.alt = "404-No card found";
  } else {
    image.src = card.imageUrl;
    image.alt = card.name;
  }
  grid1.classList.add("grid-item", "item1");
  grid1.appendChild(image);

  let name = document.createElement("p");
  let grid2 = document.createElement("div");
  name.classList.add("name");
  if (card.name === undefined) {
    name.innerHTML = "Unknown Name";
  } else {
    name.innerHTML = card.name;
  }
  grid2.classList.add("grid-item", "item2");
  grid2.appendChild(name);

  let desc = document.createElement("p");
  let grid9 = document.createElement("div");
  desc.classList.add("name");
  if (card.text === undefined) {
    desc.innerHTML = "No description.";
  } else {
    desc.innerHTML = card.text;
  }
  grid9.classList.add("grid-item", "item9");
  grid9.appendChild(desc);

  let color = document.createElement("p");
  let grid4 = document.createElement("div");
  color.classList.add("name");
  if (card.colors === undefined) {
    color.innerHTML = "Colors: N/A.";
  } else {
    color.innerHTML = "Colors: " + card.colors;
  }
  grid4.classList.add("grid-item", "item4");
  grid4.appendChild(color);

  let cost = document.createElement("p");
  let grid5 = document.createElement("div");
  cost.classList.add("name");
  if (card.manaCost === undefined) {
    cost.innerHTML = "Cost: N/A";
  } else {
    cost.innerHTML = "Cost: " + card.manaCost;
  }
  grid5.classList.add("grid-item", "item5");
  grid5.appendChild(cost);

  let power = document.createElement("p");
  let grid6 = document.createElement("div");
  power.classList.add("name");
  if (card.power === undefined) {
    power.innerHTML = "Power: N/A";
  } else {
    power.innerHTML = "Power: " + card.power;
  }
  grid6.classList.add("grid-item", "item6");
  grid6.appendChild(power);

  let rarity = document.createElement("p");
  let grid7 = document.createElement("div");
  rarity.classList.add("name");
  if (card.rarity === undefined) {
    rarity.innerHTML = "Rarity: N/A";
  } else {
    rarity.innerHTML = "Rarity: " + card.rarity;
  }
  grid7.classList.add("grid-item", "item7");
  grid7.appendChild(rarity);

  let type = document.createElement("p");
  let grid8 = document.createElement("div");
  type.classList.add("name");
  if (card.type === undefined) {
    type.innerHTML = "Types: N/A";
  } else {
    type.innerHTML = "Types: " + card.type;
  }
  grid8.classList.add("grid-item", "item8");
  grid8.appendChild(type);

  let set = document.createElement("p");
  let grid3 = document.createElement("div");
  set.classList.add("name");
  if (card.setName === undefined) {
    set.innerHTML = "Set: N/A";
  } else {
    set.innerHTML = "Set: " + card.setName;
  }
  grid3.classList.add("grid-item", "item3");
  grid3.appendChild(set);

  let art = document.createElement("p");
  let grid10 = document.createElement("div");
  art.classList.add("name");
  if (card.artist === undefined) {
    art.innerHTML = "Artist: N/A";
  } else {
    art.innerHTML = "Artist: " + card.artist;
  }
  grid10.classList.add("grid-item", "item10");
  grid10.appendChild(art);

  //Append the children to the gird container in the correct order.
  page.appendChild(grid1);
  page.appendChild(grid2);
  page.appendChild(grid3);
  page.appendChild(grid4);
  page.appendChild(grid5);
  page.appendChild(grid6);
  page.appendChild(grid7);
  page.appendChild(grid8);
  page.appendChild(grid9);
  page.appendChild(grid10);
}
export default Random;
