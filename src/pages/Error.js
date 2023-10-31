import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navigation />
      <div className="error-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
