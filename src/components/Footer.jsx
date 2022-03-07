import React from "react";
import "../components/styles/footerStyles.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="py-3 fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Bob Loblaw 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;