import React from "react";
import "../components/styles/homeStyles.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/768px-Magicthegathering-logo.svg.png?20160501122627"
              alt="Magic: The Gathering logo"
            />
          </div>
          <div className="col-lg-4">
            <p>
            Magic holds the title of "Most Played Trading Card Game," and is currently published in English, Simplified Chinese, Traditional Chinese, French, German, Italian, Korean, Japanese, Portuguese, Russian and Spanish.

            There are currently more than 20,000 unique Magic cards, to which hundreds are added each year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;