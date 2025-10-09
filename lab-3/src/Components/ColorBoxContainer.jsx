import ColorBox from "./ColorBox.jsx";
import React, { useState } from "react";

const ColorBoxContainer = ({ colors }) => {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox key={i} colors={colors} />);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 50px)",

        gridGap: "5px",

        justifyContent: "center",
        marginTop: "20px",
      }}>
      {boxes}
    </div>
  );
};
export default ColorBoxContainer;
