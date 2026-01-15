import React from 'react';
import Button from './Button';
import GameLogo from './assets/Gamebet Logo.png';

const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const Header = ({ setSearchQuery, onToggleSidebar }) => {
  return (
    // Use Grid for mobile layout (3 columns), and Flex for desktop.
    <header className="bg-[#272851] grid grid-cols-3 md:flex items-center justify-between gap-4 px-4 md:px-8 py-4">
      {/* --- Left Section (Grid Col 1 / Flex Item 1) --- */}
      <div className="flex items-center justify-start">
        {/* Hamburger Icon (Mobile Only) */}
        <button className="md:hidden text-text-primary" onClick={onToggleSidebar} aria-label="Open sidebar">
          <HamburgerIcon />
        </button>
        {/* Logo (Desktop Only) */}
        <img src={GameLogo} alt="Gamelogo" className="h-8 w-auto  md:block" />
      </div>

      {/* --- Center Section (Grid Col 2 / Flex Item 2) --- */}
      <div className="flex justify-center md:flex-1 md:mx-4 md:max-w-md">

        <div className="hidden md:block w-full">
          <input
            type="text"
            placeholder="Search games..."
            className="bg-secondary-bg border border-accent-purple rounded-lg px-4 py-2 w-full text-text-primary"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* --- Right Section (Grid Col 3 / Flex Item 3) --- */}
      <div className="flex items-center justify-end space-x-4">
        <div className="hidden md:flex items-center space-x-4">
          <div className="bg-secondary-bg border border-accent-purple rounded-lg px-4 py-2 text-white">
            <span className="text-text-primary">$ 84,195.00</span>
          </div>
          <div className="bg-secondary-bg border border-accent-purple rounded-lg px-4 py-2 text-white">
            <span className="text-text-primary">0.384.00 BTC</span>
          </div>
        </div>
        <Button className="bg-secondary-bg border border-accent-purple p-2 ">
          <span className="text-xl text-text-primary">🔔</span>
        </Button>
        <Button className="bg-accent-purple p-2 px-4 ">
          <span className="text-xl text-text-primary">👤</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;