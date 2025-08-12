import React from 'react';
import Card from './Card';

function GameBoard({ cards, onClick }) {
  return (
    <div className="grid grid-cols-5 gap-6  mt-8 ml-8 mr-8 mb-8">
      {cards.length > 0 ? (
        cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            imageUrl={card.imageUrl}
            onClick={onClick}
          />
        ))
      ) : (
        <p className="text-lg col-span-full text-center">Loading cards...</p>
      )}
    </div>
  );
}

export default GameBoard;
