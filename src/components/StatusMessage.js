import React from "react";

const StatusMessage = ({ winner, current }) => {
  //const message = winner
  //? `Winner is ${winner}`
  //: `Next player is ${current.isXNext ? "X" : "O"}`;

  const fullBlocks = current.board.every((element) => element != null);
  return (
    <div style={{ fontFamily: "cursive" }} className="status-message">
      <h1>
        {winner && (
          <>
            Winner is{" "}
            <span className={winner === "X" ? "text-green" : "text-orange"}>
              {winner}
            </span>
          </>
        )}
        {!winner && !fullBlocks && (
          <>
            Next player is{" "}
            <span className={current.isXNext ? "text-green" : "text-orange"}>
              {current.isXNext ? "X" : "O"}
            </span>
          </>
        )}
        {!winner && fullBlocks && "X and O are tied"}
      </h1>
    </div>
  );
};

export default StatusMessage;
