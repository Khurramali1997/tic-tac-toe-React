import React from "react";
//import "./style.square.css";
const Square = (param, children) => {
  console.log(param.value);
  return (
    <button type="button" className="square">
      {param.value}
    </button>
  );
};

export default Square;

//"children" parameter can be used to access the childeren of the <square><square/> component from Board.js component file
