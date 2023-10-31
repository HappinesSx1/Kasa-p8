import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import dataB from "../Logement.json";
import arrow from "../assets/icones/arrow_back_ios-24px 2.png";

const Logement = () => {
  const { id } = useParams();
  const [isActiveDesc, setIsActiveDesc] = useState(false);
  const [isActiveEquip, setIsActiveEquip] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [data, setData] = useState([]);
  // const [dataDetails, setDataDetails] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3004/database`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const dataDetails = dataB.find((data) => data.id === id);

  const handleClickDesc = () => {
    setIsActiveDesc((current) => !current);
  };
  const handleClickEquip = () => {
    setIsActiveEquip((current) => !current);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === dataDetails.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? dataDetails.pictures.length - 1 : prevSlide - 1
    );
  };
  return (
    <div>
      <Navigation />
      <div className="header-img-container">
        <div className="slider-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            className="slider-arrow arrow-left"
            onClick={prevSlide}
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
          <img
            src={dataDetails.pictures[currentSlide]}
            alt=""
            className="slider"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            className="slider-arrow arrow-right"
            onClick={nextSlide}
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="header-container">
          <div className="title-container">
            <h2>{dataDetails.title}</h2>
            <p>{dataDetails.location}</p>
            <ul className="tags">
              {dataDetails.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="owner-container">
            <div className="owner">
              <h3>{dataDetails.host.name}</h3>
              <img src={dataDetails.host.picture} />
            </div>
            <div className="note">
              <p>{dataDetails.rating}</p>
            </div>
          </div>
        </div>
        <div className="rolling-container">
          <div className="description-container deroulant">
            <div className="main-deroulant">
              <h2
                className={isActiveDesc ? "desploy" : ""}
                onClick={handleClickDesc}
              >
                Description
              </h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickDesc}
                className={isActiveDesc ? "collapsed" : "expanded"}
              />
            </div>
            {isActiveDesc && <p>{dataDetails.description}</p>}
          </div>
          <div className="equipement-container deroulant">
            <div className="main-deroulant">
              <h2
                className={isActiveEquip ? "desploy" : ""}
                onClick={handleClickEquip}
              >
                Equipements
              </h2>
              <img
                src={arrow}
                alt=""
                onClick={handleClickEquip}
                className={isActiveEquip ? "collapsed" : "expanded"}
              />
            </div>
            {isActiveEquip && (
              <ul>
                {dataDetails.equipments.map((equip) => (
                  <li>{equip}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
