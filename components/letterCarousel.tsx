"use client"

import React, { useState, useEffect } from "react";
import "./styles.css";

// based on the Word Carousel by Austin Dudas (https://codepen.io/austin_dudas/pen/babmrd)
export const LetterCarousel = () => {
  const titles = [
    "technologist",
    "data engineer",
    "software engineer",
    "software developer",
    "backend developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {titles.map((title, index) => {
          let j = (currentIndex + index) % titles.length;
          let percent = j / titles.length;
          let rad = percent * 2 * Math.PI;
          let ty = Math.sin(rad) * 200;
          let tz = 40 * Math.cos(rad) - 40;
          let op = (Math.cos(rad) + 1) / 2;
          return (
            <div
              key={title}
              className={`carousel__item ${index === currentIndex ? "active" : ""}`}
              style={{ 
                transform: `perspective(100px) translateZ(${tz}px) translateY(${ty}%)`, 
                opacity: `${op}`
              }}
            >
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};