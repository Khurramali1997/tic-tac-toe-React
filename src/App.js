import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./style/style.scss";
import { calculateWinner } from "./winner";

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const winner = calculateWinner(current.board);

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
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
  const moveTo = (index) => {
    setCurrentMove(index);
  };

  return (
    <div className="app">
      <h1 className="gameName">Tic Tac Toe</h1>
      <label htmlFor="gameName">By Khurrum Ali</label>
      <br />
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} />
    </div>
  );
}

export default App;
