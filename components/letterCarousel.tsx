"use client";

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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="carousel relative w-52 h-52">
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
              className={`carousel__item absolute top-2/4 left-0 w-full h-fit flex items-center justify-center text-center whitespace-nowrap ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                transform: `perspective(100px) translateZ(${tz}px) translateY(${ty}%)`,
                opacity: `${op}`,
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
