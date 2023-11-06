import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Etoiles from "../components/Etoiles";
import { useParams } from "react-router-dom";
import dataB from "../Logement.json";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";

const Logement = () => {
  const { id } = useParams();

  // Data récuperé depuis le fichier Logement.json
  const dataDetails = dataB.find((data) => data.id === id);

  // Chaîne de caractères
  const nameOwner = dataDetails.host.name;

  // Divise la chaîne en fonction de l'espace
  const nameOwnerTab = nameOwner.split(" ");

  return (
    <div>
      <Navigation />
      <div className="header-img-container">
        <Slider data={dataDetails} />
        <div className="header-container">
          <div className="title-container">
            <h2>{dataDetails.title}</h2>
            <p>{dataDetails.location}</p>
            <ul className="tags">
              {dataDetails.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="owner-container">
            <div className="owner">
              <h3>
                <span>{nameOwnerTab[0]}</span>
                <span>{nameOwnerTab[1]}</span>
              </h3>
              <img src={dataDetails.host.picture} />
            </div>
            <div className="note">
              <Etoiles rating={dataDetails.rating} />
            </div>
          </div>
        </div>
        <Dropdown data={dataDetails} />
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
