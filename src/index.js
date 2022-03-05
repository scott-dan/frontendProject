import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Search,
  About,
  Contact,
  Random,
  CardsByDan,
  Mana
} from "./components";
ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/random" element={<Random />} />
      <Route path="/cardsByDan" element={<CardsByDan />} />
      <Route path="/mana" element={<Mana />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
