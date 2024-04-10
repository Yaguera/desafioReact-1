import React, { useState } from 'react';
import './App.css';

function checkWinner(matrix) {
  // Verifica se há um vencedor em linhas.
  for (let i = 0; i < 3; i++) {
    if (matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
      return matrix[i][0];
    }
  }

  // Verifica se há um vencedor em colunas.
  for (let i = 0; i < 3; i++) {
    if (matrix[0][i] && matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]) {
      return matrix[0][i];
    }
  }

  // Verifica se há um vencedor na diagonal principal.
  if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
    return matrix[0][0];
  }

  // Verifica se há um vencedor na diagonal secundária.
  if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
    return matrix[0][2];
  }

  // Se nenhum jogador venceu, retorna null.
  return null;
}

function App() {
  const [turn, setTurn] = useState("X");
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);

  const handleClick = (event) => {
    const clickedBox = event.target;
    const index = parseInt(clickedBox.id) - 1;
    const row = Math.floor(index / 3);
    const col = index % 3;

    // Verifica se a caixa já foi preenchida.
    if (!clickedBox.textContent) {
      clickedBox.textContent = turn;
      const newMatrix = [...matrix];
      newMatrix[row][col] = turn;
      setMatrix(newMatrix);

      // Verifica se houve um vencedor após a última jogada.
      const winner = checkWinner(newMatrix);
      if (winner) {
        alert(`${winner} venceu!`); 
        // Aqui você pode adicionar lógica adicional para lidar com o vencedor.
      } else {
        // Se não houver vencedor, alterna o turno.
        setTurn(turn === "X" ? "O" : "X");
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="box" id="1" onClick={handleClick}></div>
        <div className="box" id="2" onClick={handleClick}></div>
        <div className="box" id="3" onClick={handleClick}></div>
        <div className="box" id="4" onClick={handleClick}></div>
        <div className="box" id="5" onClick={handleClick}></div>
        <div className="box" id="6" onClick={handleClick}></div>
        <div className="box" id="7" onClick={handleClick}></div>
        <div className="box" id="8" onClick={handleClick}></div>
        <div className="box" id="9" onClick={handleClick}></div>
      </div>
    </>
  );
}

export default App;
