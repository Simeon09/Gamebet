import React from 'react';
import GameCard from './GameCard';
import CategoryFilter from './CategoryFilter';

const games = [
  { bgColor: 'bg-accent-purple', icon: '💥', title: 'CRASH GAME', provider: 'Original', category: 'New' },
  { bgColor: 'bg-accent-pink', icon: '🪙', title: 'X FLIP', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-accent-purple', icon: '🎢', title: 'ROLLER COASTER', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-red-500', icon: '🎴', title: 'BACCARAT', provider: 'Evolution', category: 'Live Casino' },
  { bgColor: 'bg-yellow-500', icon: '🐱', title: 'BOOK OF CATS', provider: 'BGaming', category: 'Slots' },
  { bgColor: 'bg-green-500', icon: '🎰', title: 'X ROULETTE', provider: 'Rollbit', category: 'Live Casino' },
  { bgColor: 'bg-pink-500', icon: '📼', title: 'RETRO TAPES', provider: 'Push Gaming', category: 'New' },
];

const GameGrid = ({ searchQuery, selectedCategory, setSelectedCategory }) => {
  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'All Games' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;