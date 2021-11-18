import React from "react";

const History = ({ history, moveTo }) => {
  return (
    <ul>
      {history.map((_, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => {
                moveTo(index);
              }}
            >
              {index === 0 ? `Go to game start.` : `Go to move =${index}.`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
