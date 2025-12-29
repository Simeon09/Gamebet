import React from 'react';

const GameCard = ({ game }) => {
  const { bgColor, image, title, provider } = game;
  const imageHeight = title === 'CRASH GAME' ? 'h-70' : 'h-48';

  return (
    <div className="relative rounded-lg overflow-hidden" data-aos="fade-up">
      <img src={image} alt={title} className={`w-full ${imageHeight} object-contain`} />
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-gray-300">{provider}</p>
      </div> */}
    </div>
  );
};

export default GameCard;