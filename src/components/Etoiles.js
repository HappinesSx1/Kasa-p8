import React from "react";
import Star1 from "../assets/icones/starfull.png";
import Star2 from "../assets/icones/starempty.png";

const Etoiles = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    console.log(`i: ${i}, rating: ${rating}`);
    stars.push(i <= rating ? Star1 : Star2);
  }
  return (
    <ul className="stars-container">
      {stars.map((star, index) => (
        <div className="star" key={`star-${index}`}>
          <img src={star} alt="" />
        </div>
      ))}
    </ul>
  );
};

export default Etoiles;
