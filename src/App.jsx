import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import { getPokemonData } from './utils/api';
import { shuffleArray } from './utils/shuffle';

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function fetchCards() {
      const data = await getPokemonData(15);
      if (data.length === 0) {
        setError('Failed to load Pokémon data. Please refresh.');
      } else {
        setCards(
          shuffleArray(data.map((card) => ({ ...card, clicked: false })))
        );
      }
    }
    fetchCards();
  }, []);

  const handleCardClick = (id) => {
    setCards((prevCards) => {
      const card = prevCards.find((c) => c.id === id);
      if (card.clicked) {
        setCurrentScore(0);
        return shuffleArray(prevCards.map((c) => ({ ...c, clicked: false })));
      }
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setBestScore(Math.max(newScore, bestScore));
      const updatedCards = prevCards.map((c) =>
        c.id === id ? { ...c, clicked: true } : c
      );
      return shuffleArray(updatedCards);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {error && <p className="text-red-500 text-lg mb-4">{error}</p>}
      <Header currentScore={currentScore} bestScore={bestScore} />
      <GameBoard cards={cards} onClick={handleCardClick} />
    </div>
  );
}

export default App;
