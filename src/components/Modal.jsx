import React from 'react';

function Modal({ isOpen, onClose, onRestart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-[5px] flex items-center justify-center z-50 px-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-md border-1 border-gray-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">
          Game Over!
        </h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-center">
          You clicked on a card that was already selected. Try to beat your best
          score!
        </p>
        <div className="flex justify-center sm:justify-end space-x-4">
          <button
            onClick={onRestart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded cursor-pointer text-sm sm:text-base w-full sm:w-auto"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
