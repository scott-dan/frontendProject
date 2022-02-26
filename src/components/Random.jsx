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
                This returns a random generated card with the ability to select
                from a category of predefined options to filter what type of
                random Card will be displayed
              </p>
              <div className="card-type">
                <label htmlFor="card-type">Card Type:</label>
                <br />
                <select name="card-type" id="card-type">
                  <option>Choose a card type</option>
                  <option value="type1">All types</option>
                  <option value="type2">Creatues</option>
                  <option value="type3">???</option>
                  <option value="type4">???</option>
                  <option value="type5">???</option>
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
              random Card will be displayed.
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
function rnd() {
  let rand = Math.floor(Math.random() * 100);
  let page = document.getElementById("randomResult");
  let iterator = 0;

  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  fetch(url) //To see the full cards in the console
    .then((response) => response.json())
    .then((data) => console.log(data.cards));

  fetch(url)// More in-depth then needed but searches through each card.
    .then((response) => response.json())
    .then((data) => {
      data.cards.forEach((element) => {
        iterator++;
        if (iterator === rand){//Random card without checking type option
          console.log("found", element);
        }
        if (element.multiverseid === "130550") {
          let result = document.createElement("div");

          let name = document.createElement("p");
          name.classList.add("name");
          name.innerHTML = element.name;

          let image = document.createElement("img");
          image.src = element.imageUrl;
          console.log(element);
          image.classList.add("image");

          let desc = document.createElement("p");
          desc.classList.add("name");
          desc.innerHTML = element.text;

          let color = document.createElement("p");
          color.classList.add("name");
          color.innerHTML = "Colors: " + element.colors;

          let cost = document.createElement("p");
          cost.classList.add("name");
          cost.innerHTML = "Cost: " + element.manaCost;

          let power = document.createElement("p");
          power.classList.add("name");
          power.innerHTML = "Power: " + element.power;

          let rarity = document.createElement("p");
          rarity.classList.add("name");
          rarity.innerHTML = "Rarity: " + element.rarity;

          let type = document.createElement("p");
          type.classList.add("name");
          type.innerHTML = "Types: " + element.type;

          let set = document.createElement("p");
          set.classList.add("name");
          set.innerHTML = "Set: " + element.setName;

          let art = document.createElement("p");
          art.classList.add("name");
          art.innerHTML = "Artist: " + element.artist;

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
      });
    });
}
export default Random;
