import React from "react";

const StatusMessage = ({ winner, current }) => {
  //const message = winner
  //? `Winner is ${winner}`
  //: `Next player is ${current.isXNext ? "X" : "O"}`;

  const fullBlocks = current.board.every((element) => element != null);
  return (
    <div>
      <h1>
        {winner && `Winner is ${winner}`}
        {!winner &&
          !fullBlocks &&
          `Next player is ${current.isXNext ? "X" : "O"}`}
        {!winner && fullBlocks && "X and O are tied"}
      </h1>
    </div>
  );
};

export default StatusMessage;
