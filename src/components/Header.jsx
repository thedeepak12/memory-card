import React from 'react';
import Scoreboard from './Scoreboard';

function Header() {
  return (
    <header className="flex justify-between border-b-2 border-gray-200">
      <h1 className="text-4xl font-bold text-center p-5">Memory Card</h1>
      <Scoreboard />
    </header>
  );
}

export default Header;
