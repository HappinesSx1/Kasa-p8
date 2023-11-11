import React, { useState } from "react";
import arrow from "../assets/icones/arrow_back_ios-24px 2.png";

const Collapse = ({ data, title }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="description-container deroulant">
      <div className="main-deroulant">
        <h2 onClick={handleClick}>{title}</h2>
        <img
          src={arrow}
          alt=""
          onClick={handleClick}
          className={isActive ? "collapsed" : "expanded"}
        />
      </div>
      {title === "Equipements" ? (
        <ul className={isActive ? "dropdown-exit" : ""}>
          {data.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>
      ) : (
        <p className={isActive ? "dropdown-exit" : ""}>{data}</p>
      )}
    </div>
  );
};

export default Collapse;
