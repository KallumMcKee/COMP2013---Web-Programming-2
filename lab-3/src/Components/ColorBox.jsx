import React, { useState } from "react";

const ColorBox = ({ colors }) => {
  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: color,
        cursor: "pointer",
      }}></div>
  );
};
export default ColorBox;
