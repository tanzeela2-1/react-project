import { useState } from "react";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(player);
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
            {/* Player Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button className="btn"
          style={{
            backgroundColor: player === "X" ? "green" : "lightgray",
            color: "white",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
            border:"none",
            
          }}
        >
          Player 1 (X)
        </button>

        <button
          style={{
            backgroundColor: player === "O" ? "green" : "lightgray",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Player 2 (O)
        </button>
      </div>

      {/* Render in UL */}
      <ul className="ulStyle">
        {board.map((cell, i) => (
          <li className="liList"
            key={i}
            onClick={() => handleClick(i)}
          >
            {cell}
          </li>
        ))}
      </ul>

      {winner && <h2>🎉{winner} wins!</h2>}
    </div>
  );
}

function checkWinner(board) {
  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of patterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}
