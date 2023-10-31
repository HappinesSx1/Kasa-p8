import React, { useEffect, useState } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import dataB from "../Logement.json";

const Gallery = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3004/database`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <main>
      <div className="main-bg">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <ul className="cards-container">
        {dataB.map((salon, index) => (
          <NavLink to={`/logement/${salon.id}`}>
            <Card key={index} salon={salon} />
          </NavLink>
        ))}
      </ul>
    </main>
  );
};

export default Gallery;