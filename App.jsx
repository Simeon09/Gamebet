import React, { useState, useEffect } from 'react';
import Sidebar from './src/components/Sidebar';
import Header from './src/components/Header';
import Banner from './src/components/Banner';
import GameGrid from './src/components/GameGrid';
import Logo from './src/components/Logo';
import Frame from './src/components/Frame';

import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Games');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-primary-bg text-white min-h-screen flex font-outfit">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header setSearchQuery={setSearchQuery} />
        <Banner />
        <GameGrid searchQuery={searchQuery} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Logo />
        <Frame />


      </main>
    </div>
  );
};

export default App;