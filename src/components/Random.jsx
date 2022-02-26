import React from "react";
//import Card from "mtgsdk";
let url = "https://thronesapi.com/api/v2/Characters";
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
                  <option>Choose an Option</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
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
      <div className="randomizer">
        <div>
          <p className="test" id="help">
            {" "}
            do I show
          </p>
        </div>

        <section className="randomResult" id="randomResult">
          <div>Hi</div>
        </section>
      </div>
    </div>
  );
}
function rnd() {
  let page = document.getElementById("randomResult")[0];
  //let tes = document.getElementsByClassName('test');
  //let t = document.getElementById('help');
  //console.log(t.innerHTML);
  //console.log(tes.innerHTML);
  //tes.innerHTML = "ddddd";
  console.log("hello");
  //while (page.firstChild) {
  //  page.removeChild(page.firstChild);
  //}
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  //.then(data => console.log(data.cards[1]));

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.multiverseid === "130550") {
          let result = document.crateElement("div");
          let name = document.createElement("p");
          name.classList.add("name");
          name.innerHTML = element.name;
          let image = document.createElement("img");
          image.src = element.imageURL;
          image.classList.add("image");

          let test = document.createElement("p");
          test.classList.add("name");
          test.InnerHtml = "testing";

          result.appendChild(test);
          result.appendChild(name);
          result.appendChild(image);

          page.appendChild(result);
        }
      });
    });
}
export default Random;
