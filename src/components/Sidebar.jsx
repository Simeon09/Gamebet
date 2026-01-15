import React, { useState } from 'react';
import HomeIcon from './assets/Homeicon.png';
import PicksIcon from './assets/Picksicon.png';
import PromotionsIcon from './assets/Fire.png';
import TournamentsIcon from './assets/Ludoicon.png';
import SlotsIcon from './assets/Frame (2).png';
import HandShakeIcon from './assets/Partners.png';
import TaskIcon from './assets/Tasks.png';
import Icon from './assets/icon.png';
import Twitter from './assets/icon-1.png';
import Game from './assets/icon-2.png';
import Facebook from './assets/icon-3.png';
import Bitcoin from './assets/icon-4.png';
import Baby from './assets/icon-5.png';
import Tera from './assets/icon-6.png';

const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { image: HomeIcon, name: 'Home' },
    { image: PicksIcon, name: 'Picks' },
    { image: PromotionsIcon, name: 'Promotions' },
    { image: TournamentsIcon, name: 'Tournaments' },
    { image: SlotsIcon, name: 'Slots' },
    { image: HandShakeIcon, name: 'Partners' },
    { image: TaskIcon, name: 'Tasks' }

  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onToggleSidebar}
        aria-hidden="true"
      />
      <aside
        className={`bg-secondary-bg p-4 flex flex-col items-center transition-all duration-300 z-20
          fixed top-0 left-0 h-full transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-48
          md:relative md:translate-x-0 ${isHovered ? 'md:w-48' : 'md:w-20'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-2xl font-bold mb-8 font-spacegrotesk">
          <span className="md:hidden">GAMESPOT</span>
          <span className="hidden md:inline">{isHovered ? 'GAMESPOT' : 'G'}</span>
        </div>
        <nav className="flex flex-col space-y-4 w-full flex-1">
          {navItems.map((item, index) => (
            <a href="#" key={index} className="text-text-secondary hover:text-text-primary bg-accent-purple p-2 rounded-lg flex items-center">
              <img src={item.image} alt={item.name} className="w-6 h-6" />
              <span className="ml-4 md:hidden">{item.name}</span>
              {isHovered && <span className="ml-4 hidden md:inline">{item.name}</span>}
            </a>
          ))}
        </nav>
        <div className="mt-[5px] scale-90">
          <img src={Icon} alt='Twitter' className="mt-[10px] scale-90" />
          <img src={Twitter} alt='Twitter' className="mt-[10px] scale-90" />
          <img src={Game} alt='Twitter' className="mt-[10px] scale-90" />
          <img src={Facebook} alt='Twitter' className="mt-[10px] scale-90" />
          <img src={Bitcoin} alt='Twitter' className="mt-[10px] scale-90" />
          <img src={Baby} alt='Twitter' className="mt-[10px] scale-90" />
          <img src={Tera} alt='Tera' className="mt-[10px] scale-90" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;