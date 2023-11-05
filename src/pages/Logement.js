import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Etoiles from "../components/Etoiles";
import { useParams } from "react-router-dom";
import dataB from "../Logement.json";
import arrow from "../assets/icones/arrow_back_ios-24px 2.png";
import Slider from "../components/Slider";

const Logement = () => {
  const { id } = useParams();
  const [isActiveDesc, setIsActiveDesc] = useState(false);
  const [isActiveEquip, setIsActiveEquip] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const dataDetails = dataB.find((data) => data.id === id);

  // Chaîne de caractères
  const nameOwner = dataDetails.host.name;

  // Divise la chaîne en fonction de l'espace
  const nameOwnerTab = nameOwner.split(" ");

  const handleClickDesc = () => {
    setIsActiveDesc((current) => !current);
  };
  const handleClickEquip = () => {
    setIsActiveEquip((current) => !current);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === dataDetails.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? dataDetails.pictures.length - 1 : prevSlide - 1
    );
  };
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
        <div className="rolling-container">
          <div className="description-container deroulant">
            <div className="main-deroulant">
              <h2 onClick={handleClickDesc}>Description</h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickDesc}
                className={isActiveDesc ? "collapsed" : "expanded"}
              />
            </div>
            <p className={isActiveDesc ? "dropdown-exit" : "dropdown-enter"}>
              {dataDetails.description}
            </p>
          </div>
          <div className="equipement-container deroulant">
            <div className="main-deroulant">
              <h2
                className={isActiveEquip ? "desploy" : ""}
                onClick={handleClickEquip}
              >
                Equipements
              </h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickEquip}
                className={isActiveEquip ? "collapsed" : "expanded"}
              />
            </div>
            <ul className={isActiveEquip ? "dropdown-exit" : "dropdown-enter"}>
              {dataDetails.equipments.map((equip) => (
                <li>{equip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
