import React from 'react';
import Space from './assets/Space.png';



// Using the public folder reference avoids bundler import errors when the image
// file is not present in the repo. Place your banner at: public/assets/images/banner.png
const Banner = () => {
  return (
    <div
      className="rounded-lg p-0 mb-8 bg-center bg-cover bg-no-repeat"
    >
      <img src={Space} alt="Banner Background" />
      {/* <div className="bg-gradient-to-r from-accent-purple/60 to-accent-pink/60 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-2 font-spacegrotesk">
          Get 1 000 Free Spins + <span className="text-accent-cyan">250%</span> on your deposit
        </h1>
        <p className="text-yellow-400 mb-4">Leading Crypto Casino</p>
        <p className="text-gray-300">
          Enjoy 5000+ crypto games, fast payouts and 24/7 live support. Make the best of the superior Bitcoin Casino.
        </p>
      </div> */}
    </div>
  );
};

export default Banner;