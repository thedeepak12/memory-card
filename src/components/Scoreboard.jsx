import React from 'react';

function Scoreboard() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center gap-4 bg-gray-200 p-5 mr-5 w-[300px] h-[60px] rounded-lg">
        <p className="text-xl">Score: 0</p>
        <p className="text-xl">Best Score: 0</p>
      </div>
    </div>
  );
}

export default Scoreboard;
