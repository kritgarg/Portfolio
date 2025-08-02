// src/components/FloatingSquares.jsx
import React from "react";

const FloatingSquares = ({ count = 30 }) => {
  const squares = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {squares.map((_, i) => {
        const size = Math.random() * 6 + 4; // 4px - 10px
        const duration = Math.random() * 10 + 5; // 5s - 15s
        const delay = Math.random() * 10;
        const left = Math.random() * 100; // percentage

        return (
          <div
            key={i}
            className="bg-orange-500 absolute opacity-60"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: "100%",
              left: `${left}%`,
              animation: `floatUp ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingSquares;
