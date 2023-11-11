import React from "react";
import { useLocation } from "react-router-dom";

const Banner = ({ src }) => {
  const location = useLocation();

  return (
    <div className="header-bg">
      <img
        src={src}
        alt="Header image"
        className={location.pathname === "/" ? "home-bg" : ""}
      />
      {location.pathname === "/" ? <p>Chez vous, partout et ailleurs</p> : ""}
    </div>
  );
};

export default Banner;
