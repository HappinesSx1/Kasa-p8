import React from "react";

const Card = ({ salon }) => {
  return (
    <li className="card">
      <img src={salon.cover} alt="" />
      <div className="bgcolor"></div>
      <p>{salon.title}</p>
    </li>
  );
};

export default Card;
