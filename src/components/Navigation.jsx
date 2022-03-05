import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Magic: The Gathering Card Dashboard
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/search">
                  Card Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/random">
                  Card Randomizer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cardsByDan">
                  Cards By Dan
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/statistics">
                  Statistics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mana">
                  Creatures by Mana
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
