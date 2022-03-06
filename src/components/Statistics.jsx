import React from "react";
import "../components/styles/statisticStyles.css";
let url = "https://api.magicthegathering.io/v1/cards";
let PAGE_MAX = 490;
let PAGE = 1;
/**
 * This page contains info on a variety of statistics
 * generated fron the API on Magic the Gathering.
 * These statistics are then presented to the user
 * in an accessable manner.
 */
function Statistics() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <div className="col-lg-5">
              <h1 className="font-weight-light">Card Rarity</h1>
              <p>
                Here we have the rarity among 100 magic the gathering
                cards. You can also click the generate button to search through
                another 100 cards with the results displayed below.
              </p>
              <div className="card-type">
                <label htmlFor="card-type">Statistic Type:</label>
                <br />
                <select name="card-type" id="select-box" className="select-box">
                  <option value="All">All Types</option>
                  <option value="Creature">Creatures</option>
                  <option value="Land">Lands</option>
                  <option value="Enchantment">Enchantments</option>
                  <option value="Artifact">Artifacts</option>
                  <option value="Instant">Instants</option>
                </select>
                <br />
              </div>
              <button className="button" onClick={rarity}>
                Generate
              </button>
              <div>
                <section className="grid-contain">
                  <div className="grid-item item2" id="grid1">
                    <strong>Common: 0</strong>
                  </div>
                  <div className="grid-item item2" id="grid2">
                    <strong>Uncommon: 0</strong>
                  </div>
                  <div className="grid-item item2" id="grid3">
                    <strong>Rare: 0</strong>
                  </div>
                  <div className="grid-item item2" id="grid4">
                    <strong>Mythic: 0</strong>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Statistic 2</h1>
            <p>This contains info for a second statistic.</p>
          </div>
        </div>
      </div>
      <div className="randomizer text-center">
        <section className="randomResult" id="randomResult"></section>
      </div>
    </div>
  );
}

function rarity() {
  //Generating two random values for database-wide & query-wide searches.
  if (PAGE === PAGE_MAX) return;
  let searchUrl = url + "?page=" + PAGE;
  PAGE++;
  console.log(searchUrl);
  let common = 0;
  let uncommon = 0;
  let rare = 0;
  let mythic = 0;
  let grid1 = document.getElementById("grid1");
  let grid2 = document.getElementById("grid2");
  let grid3 = document.getElementById("grid3");
  let grid4 = document.getElementById("grid4");

  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      data.cards.forEach((element) => {
        console.log(element);
        if (element.rarity === "Common") {
          common++;
        }
        if (element.rarity === "Uncommon") {
          uncommon++;
        }
        if (element.rarity === "Rare") {
          rare++;
        }
        if (element.rarity === "Mythic") {
          mythic++;
        }
      });
      grid1.innerHTML = "<strong> Common: " + common + "</strong>";
      grid2.innerHTML = "<strong> Uncommon: " + uncommon + "</strong>";
      grid3.innerHTML = "<strong> Rare: " + rare + "</strong>";
      grid4.innerHTML = "<strong> Mythic: " + mythic + "</strong>";
    });
}
export default Statistics;
