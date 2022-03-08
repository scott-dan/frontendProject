import React from "react";
import "../components/styles/homeStyles.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
      <div className="homeRow">
        <div className="row align-items-center justify-content-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/768px-Magicthegathering-logo.svg.png?20160501122627"
              alt="Magic: The Gathering logo"
            />
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;