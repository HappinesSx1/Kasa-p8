import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import bgAbout from "../img/IMGbgpropos.jpg";

const Apropos = () => {
  const aboutDetails = [
    {
      id: 0,
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 1,
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 2,
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 3,
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Navigation />
      <main>
        <Banner src={bgAbout} />
        <div className="propos-container">
          <Collapse data={aboutDetails[0].text} title={aboutDetails[0].title} />
          <Collapse data={aboutDetails[1].text} title={aboutDetails[1].title} />
          <Collapse data={aboutDetails[2].text} title={aboutDetails[2].title} />
          <Collapse data={aboutDetails[3].text} title={aboutDetails[3].title} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apropos;
