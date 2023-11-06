import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import arrow from "../assets/icones/arrow_back_ios-24px 2.png";

const Apropos = () => {
  const [isActiveFlabilité, setIsActiveFlabilité] = useState(false);
  const [isActiveRespect, setIsActiveRespect] = useState(false);
  const [isActiveService, setIsActiveService] = useState(false);
  const [isActiveSécurité, setIsActiveSécurité] = useState(false);

  const handleClickFlabilité = () => {
    setIsActiveFlabilité((current) => !current);
  };
  const handleClickRespect = () => {
    setIsActiveRespect((current) => !current);
  };
  const handleClickService = () => {
    setIsActiveService((current) => !current);
  };
  const handleClickSécurité = () => {
    setIsActiveSécurité((current) => !current);
  };

  return (
    <div>
      <Navigation />
      <main>
        <div className="main-bg-propos"></div>
        <div className="info-container">
          <div className="dropdown-container">
            <div className="main-deroulant">
              <h2
                className={isActiveFlabilité ? "desploy" : ""}
                onClick={handleClickFlabilité}
              >
                Flabilité
              </h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickFlabilité}
                className={isActiveFlabilité ? "collapsed" : "expanded"}
              />
            </div>
            <p className={isActiveFlabilité ? "dropdown-exit" : ""}>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
          <div className="dropdown-container">
            <div className="main-deroulant">
              <h2
                className={isActiveRespect ? "desploy" : ""}
                onClick={handleClickRespect}
              >
                Respect
              </h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickRespect}
                className={isActiveRespect ? "collapsed" : "expanded"}
              />
            </div>
            <p className={isActiveRespect ? "dropdown-exit" : ""}>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
          <div className="dropdown-container">
            <div className="main-deroulant">
              <h2
                className={isActiveService ? "desploy" : ""}
                onClick={handleClickService}
              >
                Service
              </h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickService}
                className={isActiveService ? "collapsed" : "expanded"}
              />
            </div>
            <p className={isActiveService ? "dropdown-exit" : ""}>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraïnera une exclusion de notre plateforme.
            </p>
          </div>
          <div className="dropdown-container">
            <div className="main-deroulant">
              <h2
                className={isActiveSécurité ? "desploy" : ""}
                onClick={handleClickSécurité}
              >
                Sécurité
              </h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickSécurité}
                className={isActiveSécurité ? "collapsed" : "expanded"}
              />
            </div>
            <p className={isActiveSécurité ? "dropdown-exit" : ""}>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apropos;
