import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./style/style.scss";
import { calculateWinner } from "./winner";

const begin = [{ board: Array(9).fill(null), isXNext: true }];

function App() {
  const [history, setHistory] = useState(begin);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const { winner, winningBlocks } = calculateWinner(current.board);

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
  const newGameBtn = () => {
    setHistory(begin);
    setCurrentMove(0);
  };

  return (
    <div style={{ fontFamily: "cursive" }} className="app">
      <h1 className="gameName" style={{ fontFamily: "cursive" }}>
        Tic <span className="text-green">Tac</span> Toe
      </h1>
      <label htmlFor="gameName" style={{ fontFamily: "cursive" }}>
        By Khurrum Ali
      </label>
      <br />
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningBlocks={winningBlocks}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? "active" : ""}`}
        onClick={newGameBtn}
      >
        New Game
      </button>
      <h2 style={{ fontFamily: "cursive" }}>History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
}

export default App;
