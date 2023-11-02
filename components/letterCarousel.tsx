"use client";

import React, { useState, useEffect } from "react";

const LetterCarousel = () => {
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
      setCurrentIndex((currentIndex + 1) % titles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="inline-block overflow-hidden whitespace-nowrap mx-4">
      <span className="inline-block animate-marquee">
        {titles[currentIndex]}
      </span>
    </div>
  );
};

export { LetterCarousel };
