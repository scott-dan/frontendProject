import React from "react";

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
                Select what type you wish your random card to be. 
                You may chose from Creatues, Lands, Enchantments, Artifacts, Instants, 
                or all of the above.
              </p>
              <div className="card-type">
                <label htmlFor="card-type">Card Type:</label>
                <br />
                <select name="card-type" id="card-type">
                  <option value="All">All Types</option>
                  <option value="Creature">Creatures</option>
                  <option value="Land">Lands</option>
                  <option value="Enchantment">Enchantments</option>
                  <option value="Artifact">Artifacts</option>
                  <option value="Instant">Instants</option>
                </select>
                <br />
              </div>
              <button onClick={rnd}>Generate</button>
            </div>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Card Search</h1>
            <p>
              This returns a random generated card with the ability to select
              from a category of predefined options to filter what type of
              random Card will be displayed. This generated search chooses 
              from over 5,000 Magic the Gathering cards.
            </p>
          </div>
        </div>
      </div>
      <div className="randomizer text-center">
        <section className="randomResult" id="randomResult">
          <div>Hi!</div>
        </section>
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
  let selectedType = document.getElementById("card-type");
  if (selectedType.value !== "All") {
    fetch(url + "/?types=" + selectedType.value)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.cards[randSelected]);
      });
  }
  console.log(selectedType.value);
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  /* // For console testing to view card Json. Unnecessary Query otherwise.
  fetch(serchUrl)
    .then((response) => response.json())
    .then((data) => console.log(data.card.name));
*/

  fetch(serchUrl) // More in-depth then needed but searches through each card.
    .then((response) => response.json())
    .then((data) => {
      //data.card.forEach((element) => {
      //iterator++;
      //if (iterator === rand){//Random card without checking type option
      //  console.log("found", element);
      //}

      //Ensures it's a valid card.
      if (data.card.multiverseid !== undefined) {

        //Outputs for console viewing
        console.log(data.card);
        let result = document.createElement("div");

        let name = document.createElement("p");
        name.classList.add("name");
        name.innerHTML = data.card.name;

        let image = document.createElement("img");
        image.src = data.card.imageUrl;
        
        image.classList.add("image");

        let desc = document.createElement("p");
        desc.classList.add("name");
        desc.innerHTML = data.card.text;

        let color = document.createElement("p");
        color.classList.add("name");
        color.innerHTML = "Colors: " + data.card.colors;

        let cost = document.createElement("p");
        cost.classList.add("name");
        cost.innerHTML = "Cost: " + data.card.manaCost;

        let power = document.createElement("p");
        power.classList.add("name");
        power.innerHTML = "Power: " + data.card.power;

        let rarity = document.createElement("p");
        rarity.classList.add("name");
        rarity.innerHTML = "Rarity: " + data.card.rarity;

        let type = document.createElement("p");
        type.classList.add("name");
        type.innerHTML = "Types: " + data.card.type;

        let set = document.createElement("p");
        set.classList.add("name");
        set.innerHTML = "Set: " + data.card.setName;

        let art = document.createElement("p");
        art.classList.add("name");
        art.innerHTML = "Artist: " + data.card.artist;

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
      } else {
        console.error("Invalid card id passed.");
      }
      // });
    });
}
export default Random;
