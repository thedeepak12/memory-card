import React from 'react';
import Scoreboard from './Scoreboard';

function Header({ currentScore, bestScore }) {
  return (
    <div>
      <header className="md:flex md:flex-row min-w-screen justify-between border-b-2 border-gray-200">
        <h1 className="text-4xl font-bold text-center p-6 -mt-5">Memory Card</h1>
        <div className="hidden md:block mt-2">
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        </div>
      </header>
      <div className="md:hidden mt-5">
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>
    </div>
  );
}

export default Header;
