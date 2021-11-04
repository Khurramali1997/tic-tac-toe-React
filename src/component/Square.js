import React from "react";
const Square = (param) => {
  console.log(param);
  return <button type="button">{param.value}</button>;
};

export default Square;
