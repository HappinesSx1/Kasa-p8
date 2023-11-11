import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import dataB from "../Logement.json";
import Banner from "./Banner";
import bgHome from "../img/IMGbghome.png";

const Gallery = () => {
  return (
    <main>
      <Banner src={bgHome} />
      <section className="cards-container">
        {dataB.map((salon) => (
          <NavLink key={salon.id} to={`/logement/${salon.id}`}>
            <Card salon={salon} />
          </NavLink>
        ))}
      </section>
    </main>
  );
};

export default Gallery;
