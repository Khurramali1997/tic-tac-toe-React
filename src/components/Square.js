import React from "react";
//import "./style.square.css";
const Square = ({ value, onClick, isWinningBlock }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningBlock ? "bold" : "normal" }}
    >
      {value}
    </button>
  );
};

export default Square;

//"children" parameter can be used to access the childeren of the <square><square/> component from Board.js component file
