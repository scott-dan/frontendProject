import React from "react";
import "../components/styles/statisticStyles.css";
let url = "https://api.magicthegathering.io/v1/cards";

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
              <h1 className="font-weight-light">Statistic 1</h1>
              <p>
                This is a placeholder for a desired statistic.
              </p>
              <div className="card-type">
                <label htmlFor="card-type">Statistic Type:</label>
                <br />
                <select name="card-type" id="select-box" className = "select-box">
                  <option value="All">All Types</option>
                  <option value="Creature">Creatures</option>
                  <option value="Land">Lands</option>
                  <option value="Enchantment">Enchantments</option>
                  <option value="Artifact">Artifacts</option>
                  <option value="Instant">Instants</option>
                </select>
                <br />
              </div>
              <button className="button">Generate</button>
            </div>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Statistic 2</h1>
            <p>
              This contains info for a second statistic.
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

export default Statistics;
