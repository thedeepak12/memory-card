import React from 'react';

function Card({ id, name, imageUrl, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md border-2 border-gray-300 p-4 cursor-pointer hover:shadow-lg transition transform hover:scale-105"
      onClick={() => onClick(id)}
    >
      <img src={imageUrl} alt={name} className="object-contain" />
      <p className="text-center capitalize mt-2 font-medium">{name}</p>
    </div>
  );
}

export default Card;
