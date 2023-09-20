import React, { useState } from "react";

const Game = () => {
  const [histori, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // const currentEl
  return <div></div>;
};

export default Game;
