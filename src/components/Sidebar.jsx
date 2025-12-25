import React, { useState } from 'react';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { icon: '🏠', name: 'Home' },
    { icon: '👑', name: 'Picks' },
    { icon: '⚡', name: 'Promotions' },
    { icon: '🏆', name: 'Tournaments' },
    { icon: '🎰', name: 'Slots' },
  ];

  return (
    <aside
      className={`bg-secondary-bg p-4 flex flex-col items-center transition-all duration-300 ${isHovered ? 'w-48' : 'w-20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-2xl font-bold mb-8 font-spacegrotesk">{isHovered ? 'GAMESPOT' : 'G'}</div>
      <nav className="flex flex-col space-y-4 w-full">
        {navItems.map((item, index) => (
          <a href="#" key={index} className="text-text-secondary hover:text-text-primary bg-accent-purple p-2 rounded-lg flex items-center">
            <span className="text-2xl">{item.icon}</span>
            {isHovered && <span className="ml-4">{item.name}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;