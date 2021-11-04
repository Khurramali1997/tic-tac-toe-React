import React from "react";
import Square from "./Square";
const Board = () => {
  return (
    <div>
      <div>
        <Square>Hello World</Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  );
};

export default Board;
