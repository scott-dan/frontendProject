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
                Here we have the rarity among 100 magic the gathering cards. You
                can also click the generate button to search through another 100
                cards with the results displayed below.
              </p>
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
            <h1 className="font-weight-light">Power</h1>
            <p>
              This contains info for the distribution of power across a
              selection of 100 Magic the Gathering cards. Clicking generate will
              search a new set of 100.
            </p>
            <button className="button" onClick={power}>
              Generate
            </button>
            <div>
              <section className="grid-contain">
                <div className="grid-item item2" id="grid5">
                  <strong>Power of 1: 0</strong>
                </div>
                <div className="grid-item item2" id="grid6">
                  <strong>Power of 2: 0</strong>
                </div>
                <div className="grid-item item2" id="grid7">
                  <strong>Power of 3: 0</strong>
                </div>
                <div className="grid-item item2" id="grid8">
                  <strong>Power of 4: 0</strong>
                </div>
                <div className="grid-item item2" id="grid9">
                  <strong>Power of 5: 0</strong>
                </div>
                <div className="grid-item item2" id="grid10">
                  <strong>Power of 6: 0</strong>
                </div>
                <div className="grid-item item2" id="grid11">
                  <strong>Power of 7: 0</strong>
                </div>
                <div className="grid-item item2" id="grid12">
                  <strong>Power of 8: 0</strong>
                </div>
                <div className="grid-item item2" id="grid18">
                  <strong>Greater than 8: 0</strong>
                </div>
              </section>
            </div>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Colors</h1>
            <p>
              This contains info for the distribution of colors across a
              selection of 100 Magic the Gathering cards. Clicking generate will
              search a new set of 100.
            </p>
            <button className="button" onClick={colors}>
              Generate
            </button>
            <div>
              <section className="grid-contain">
                <div className="grid-item item2" id="grid13">
                  <strong>White: 0</strong>
                </div>
                <div className="grid-item item2" id="grid14">
                  <strong>Blue: 0</strong>
                </div>
                <div className="grid-item item2" id="grid15">
                  <strong>Black: 0</strong>
                </div>
                <div className="grid-item item2" id="grid16">
                  <strong>Red: 0</strong>
                </div>
                <div className="grid-item item2" id="grid17">
                  <strong>Green: 0</strong>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * Searchs through a page incrementally to collect the number
 * of different raritys throughout the API by looping through
 * the collected JSON elements.
 */
function rarity() {
  if (PAGE === PAGE_MAX) return;
  let searchUrl = url + "?page=" + PAGE;
  PAGE++;
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
/**
 * Searchs through a page incrementally to collect the number
 * of different powers throughout the API by looping through
 * the collected JSON elements.
 */
function power() {
  if (PAGE === PAGE_MAX) return;
  let searchUrl = url + "?page=" + PAGE;
  PAGE++;
  let one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    six = 0,
    seven = 0,
    eight = 0,
    greater = 0;
  let grid1 = document.getElementById("grid5");
  let grid2 = document.getElementById("grid6");
  let grid3 = document.getElementById("grid7");
  let grid4 = document.getElementById("grid8");
  let grid5 = document.getElementById("grid9");
  let grid6 = document.getElementById("grid10");
  let grid7 = document.getElementById("grid11");
  let grid8 = document.getElementById("grid12");
  let grid9 = document.getElementById("grid18");

  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      data.cards.forEach((element) => {
        if (element.power === "1") {
          one++;
        }
        if (element.power === "2") {
          two++;
        }
        if (element.power === "3") {
          three++;
        }
        if (element.power === "4") {
          four++;
        }
        if (element.power === "5") {
          five++;
        }
        if (element.power === "6") {
          six++;
        }
        if (element.power === "7") {
          seven++;
        }
        if (element.power === "8") {
          eight++;
        } else if (element.power === ("9"||"10"||"11"||"12"||"13"||"14"||"15"||"16")) {
          greater++;
        }
      });
      grid1.innerHTML = "<strong> Power of 1: " + one + "</strong>";
      grid2.innerHTML = "<strong> Power of 2: " + two + "</strong>";
      grid3.innerHTML = "<strong> Power of 3: " + three + "</strong>";
      grid4.innerHTML = "<strong> Power of 4: " + four + "</strong>";
      grid5.innerHTML = "<strong> Power of 5: " + five + "</strong>";
      grid6.innerHTML = "<strong> Power of 6: " + six + "</strong>";
      grid7.innerHTML = "<strong> Power of 7: " + seven + "</strong>";
      grid8.innerHTML = "<strong> Power of 8: " + eight + "</strong>";
      grid9.innerHTML = "<strong> Greater than 8: " + greater + "</strong>";
    });
}
/**
 * Searchs through a page incrementally to collect the number
 * of different colors throughout the API by looping through
 * the collected JSON elements.
 */
function colors() {
  if (PAGE === PAGE_MAX) return;
  let searchUrl = url + "?page=" + PAGE;
  PAGE++;
  let white = 0;
  let blue = 0;
  let black = 0;
  let red = 0;
  let green = 0;
  let grid1 = document.getElementById("grid13");
  let grid2 = document.getElementById("grid14");
  let grid3 = document.getElementById("grid15");
  let grid4 = document.getElementById("grid16");
  let grid5 = document.getElementById("grid17");

  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      data.cards.forEach((element) => {
        if(element.colors){
          for (let i = 0; i < element.colors.length; i++) {
            if (element.colors[i] === "White") {
              white++;
            }
            if (element.colors[i] === "Blue") {
              blue++;
            }
            if (element.colors[i] === "Black") {
              black++;
            }
            if (element.colors[i] === "Red") {
              red++;
            }
            if (element.colors[i] === "Green") {
              green++;
            }
          }
        }
      });
      grid1.innerHTML = "<strong> White: " + white + "</strong>";
      grid2.innerHTML = "<strong> Blue: " + blue + "</strong>";
      grid3.innerHTML = "<strong> Black: " + black + "</strong>";
      grid4.innerHTML = "<strong> Red: " + red + "</strong>";
      grid5.innerHTML = "<strong> Green: " + green + "</strong>";
    });
}
export default Statistics;
