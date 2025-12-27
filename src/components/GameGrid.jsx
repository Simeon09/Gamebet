import React from 'react';
import GameCard from './GameCard';
import CategoryFilter from './CategoryFilter';
import Component from './assets/component.png';
import XlipImage from './assets/Game Image.png';
import FlipImage from './assets/Game Image (1).png';
import RollerImage from './assets/Game Image (2).png';
import BaccaratImage from './assets/Game Image (3).png';
import CatsImage from './assets/Component.png'; // assuming for BOOK OF CATS
import RouletteImage from './assets/GameCard.png';
import TapesImage from './assets/GameCard (1).png';

const games = [
  { bgColor: 'bg-accent-purple', image: Component, title: 'CRASH GAME', provider: 'Original', category: 'New' },
  { bgColor: 'bg-accent-pink', image: XlipImage, title: 'X FLIP', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-accent-pink', image: FlipImage, title: 'X FLIP', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-accent-purple', image: RollerImage, title: 'ROLLER COASTER', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-red-500', image: BaccaratImage, title: 'BACCARAT', provider: 'Evolution', category: 'Live Casino' },

  { bgColor: 'bg-green-500', image: RouletteImage, title: 'X ROULETTE', provider: 'Rollbit', category: 'Live Casino' },
  { bgColor: 'bg-pink-500', image: TapesImage, title: 'RETRO TAPES', provider: 'Push Gaming', category: 'New' },
  // { bgColor: 'bg-accent-purple', image: Component, title: 'CRASH GAME', provider: 'Original', category: 'New' },
  { bgColor: 'bg-accent-pink', image: XlipImage, title: 'X FLIP', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-accent-pink', image: FlipImage, title: 'X FLIP', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-accent-purple', image: RollerImage, title: 'ROLLER COASTER', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-red-500', image: BaccaratImage, title: 'BACCARAT', provider: 'Evolution', category: 'Live Casino' },

  { bgColor: 'bg-green-500', image: RouletteImage, title: 'X ROULETTE', provider: 'Rollbit', category: 'Live Casino' },
  { bgColor: 'bg-pink-500', image: TapesImage, title: 'RETRO TAPES', provider: 'Push Gaming', category: 'New' },
  { bgColor: 'bg-accent-purple', image: RollerImage, title: 'ROLLER COASTER', provider: 'Rollbit', category: 'Slots' },
  { bgColor: 'bg-red-500', image: BaccaratImage, title: 'BACCARAT', provider: 'Evolution', category: 'Live Casino' },
];

const GameGrid = ({ searchQuery, selectedCategory, setSelectedCategory }) => {
  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'All Games' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div>

        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2">
          {filteredGames.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>


      </div>

    </div>

  );
};

export default GameGrid;