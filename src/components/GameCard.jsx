import React from 'react';

const GameCard = ({ game }) => {
  const { bgColor, icon, title, provider } = game;

  return (
    <div className={`${bgColor} rounded-lg p-4`} data-aos="fade-up">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-400">{provider}</p>
    </div>
  );
};

export default GameCard;