import React, { useState } from "react";
import "../assets/css/HeroSection.css";
import { news } from "./dummy";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousNews = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  };

  const goToNextNews = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-container">
      <div className="transparent-box">
        <button className="arrow left" onClick={goToPreviousNews}>
          &#10094;
        </button>
        <div className="news-box">
          <img
            src={news[currentIndex].imageUrl}
            alt={news[currentIndex].category}
          />
          <div className="news-description">
            <h1>{news[currentIndex].category}</h1>
            <h3>{news[currentIndex].description}</h3>
          </div>
        </div>
        <button className="arrow right" onClick={goToNextNews}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
