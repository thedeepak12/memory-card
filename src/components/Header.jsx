import React from 'react';
import Scoreboard from './Scoreboard';

function Header({ currentScore, bestScore }) {
  return (
    <header className="flex min-w-screen justify-between border-b-2 border-gray-200">
      <h1 className="text-4xl font-bold text-center p-6 -mt-5">Memory Card</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

export default Header;
