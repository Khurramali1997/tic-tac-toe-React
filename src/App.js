import React from "react";
import Board from "./components/Board";
import "./style/style.scss";

function App() {
  return (
    <div className="app">
      <h1 className="gameName">Tic Tac Toe</h1>
      <label htmlFor="gameName">By Khurrum Ali</label>
      <br />
      <Board></Board>
    </div>
  );
}

export default App;
