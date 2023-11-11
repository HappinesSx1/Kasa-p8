import React from "react";

const Card = ({ salon }) => {
  return (
    <article className="card">
      <img src={salon.cover} alt="" />
      <div className="bgcolor"></div>
      <p>{salon.title}</p>
    </article>
  );
};

export default Card;
