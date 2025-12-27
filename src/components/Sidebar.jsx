import React, { useState } from 'react';
import HomeIcon from './assets/Homeicon.png';
import PicksIcon from './assets/Picksicon.png';
import PromotionsIcon from './assets/Fire.png';
import TournamentsIcon from './assets/Ludoicon.png';
import SlotsIcon from './assets/Frame (2).png';
import HandShakeIcon from './assets/Partners.png';
import TaskIcon from './assets/Tasks.png';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { image: HomeIcon, name: 'Home' },
    { image: PicksIcon, name: 'Picks' },
    { image: PromotionsIcon, name: 'Promotions' },
    { image: TournamentsIcon, name: 'Tournaments' },
    { image: SlotsIcon, name: 'Slots' },
    { image: HandShakeIcon, name: 'Partners' },
    { Image: TaskIcon, name: 'Tasks' }

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
            <img src={item.image} alt={item.name} className="w-6 h-6" />
            {isHovered && <span className="ml-4">{item.name}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;