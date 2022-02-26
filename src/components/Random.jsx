import React from "react";
let url = "https://api.magicthegathering.io/v1/cards";

function Random() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <form>
              <div className="col-lg-5">
                <h1 className="font-weight-light">Generate</h1>
                <p>
                  This returns a random generated card with the ability to
                  select from a category of predefined options to filter what
                  type of random Card will be displayed
                </p>
              </div>
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
            </form>
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
        <section className="randomResult"></section>
      </div>
    </div>
  );
}

function rnd() {
  let page = document.getElementsByClassName("randomResult")[0];

  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  fetch(url).then((response) => response.json())
  .then((data) => {
    data.forEach((element) =>{

    });
  });
}
export default Random;
