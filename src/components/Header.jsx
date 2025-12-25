import React from 'react';
import Button from './Button';

const Header = ({ setSearchQuery }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search games..."
          className="bg-secondary-bg border border-accent-purple rounded-lg px-4 py-2 w-full text-text-primary"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-secondary-bg border border-accent-purple rounded-lg px-4 py-2 text-white">
          <span className="text-text-primary">$ 84,195.00</span>
        </div>
        <div className="bg-secondary-bg border border-accent-purple rounded-lg px-4 py-2 text-white">
          <span className="text-text-primary">0.384.00 BTC</span>
        </div>
        <Button className="bg-secondary-bg border border-accent-purple">
          <span className="text-xl text-text-primary">🔔</span>
        </Button>
        <Button className="bg-accent-purple">
          <span className="text-xl text-text-primary">👤</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;