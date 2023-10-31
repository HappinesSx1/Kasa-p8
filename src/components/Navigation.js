import React from "react";
import logo from "../img/LOGOlogoKasa.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/A-propos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
