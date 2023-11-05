import React, { useState } from "react";

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.pictures.length - 1 : prevSlide - 1
    );
  };

  return (
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
      <img src={data.pictures[currentSlide]} alt="" className="slider" />
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
      <div className="cont-container">
        <p>
          {currentSlide === data.pictures.length
            ? currentSlide - 1
            : currentSlide + 1}{" "}
          / {data.pictures.length}
        </p>
      </div>
    </div>
  );
};

export default Slider;
