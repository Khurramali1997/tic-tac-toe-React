import React, { useState } from "react";
import Board from "./components/Board";
import "./style/style.scss";
import { calculateWinner } from "./winner";

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? "X" : "O"}`;
  console.log(winner);

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    console.log(current.board);
    setHistory((prev) => {
      const lastState = prev[prev.length - 1];
      const newBoard = lastState.board.map((square, pos) => {
        if (pos === position) {
          return lastState.isXNext ? "X" : "O";
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !lastState.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };
  return (
    <div className="app">
      <h1 className="gameName">Tic Tac Toe</h1>
      <label htmlFor="gameName">By Khurrum Ali</label>
      <br />
      <h2>{message}</h2>
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
      ></Board>
    </div>
  );
}

export default App;
