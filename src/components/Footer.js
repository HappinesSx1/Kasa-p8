import React from "react";
import logo from "../img/LOGOforfooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="sous-titre">
        <p>c 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
