import React, { useState } from "react";
import arrow from "../assets/icones/arrow_back_ios-24px 2.png";

const Dropdown = ({ data }) => {
  const [isActiveDesc, setIsActiveDesc] = useState(false);
  const [isActiveEquip, setIsActiveEquip] = useState(false);
  const handleClickDesc = () => {
    setIsActiveDesc((current) => !current);
  };
  const handleClickEquip = () => {
    setIsActiveEquip((current) => !current);
  };
  return (
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
        <p className={isActiveDesc ? "dropdown-exit" : ""}>
          {data.description}
        </p>
      </div>
      <div className="equipement-container deroulant">
        <div className="main-deroulant">
          <h2 onClick={handleClickEquip}>Equipements</h2>
          <img
            src={arrow}
            alt=""
            onClick={handleClickEquip}
            className={isActiveEquip ? "collapsed" : "expanded"}
          />
        </div>
        <ul className={isActiveEquip ? "dropdown-exit" : ""}>
          {data.equipments.map((equip) => (
            <li>{equip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
