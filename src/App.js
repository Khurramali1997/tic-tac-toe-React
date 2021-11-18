import React, { useState } from "react";
import Board from "./components/Board";
import "./style/style.scss";
import { calculateWinner } from "./winner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? "X" : "O"}`;
  console.log(winner);

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    console.log(board);
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }

        return square;
      });
    });
    setIsNext((prev) => !prev);
  };
  return (
    <div className="app">
      <h1 className="gameName">Tic Tac Toe</h1>
      <label htmlFor="gameName">By Khurrum Ali</label>
      <br />
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick}></Board>
    </div>
  );
}

export default App;
