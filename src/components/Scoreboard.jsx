import React from 'react';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center gap-4 bg-gray-200 p-5 -mt-3 mr-5 w-[300px] h-[60px] rounded-lg">
        <p className="text-xl">Score: {currentScore}</p>
        <p className="text-xl">Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Scoreboard;
