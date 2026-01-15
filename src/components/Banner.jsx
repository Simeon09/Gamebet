import React from 'react';
import Space from './assets/Space.png';
import MobileSpace from './assets/BannerMobile.png';
import BNB from './assets/BNB.svg';
import Bitcoin from './assets/Bitcoin.svg';
import Ethereum from './assets/ethereum.svg';
import Litecoin from './assets/biswap.svg';





// Using the public folder reference avoids bundler import errors when the image
// file is not present in the repo. Place your banner at: public/assets/images/banner.png
const Banner = () => {
  return (
    <div
      className="  rounded-lg overflow-hidden"
    >
      <img src={Space} alt="Banner Background" className="hidden md:block w-full h-auto" />
      <img src={MobileSpace} alt='Banner' className="block overflow-hidden md:hidden w-full" />
      {/* <div className="bg-gradient-to-r from-accent-purple/60 to-accent-pink/60 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-2 font-spacegrotesk">
          Get 1 000 Free Spins + <span className="text-accent-cyan">250%</span> on your deposit
        </h1>
        <p className="text-yellow-400 mb-4">Leading Crypto Casino</p>
        <p className="text-gray-300">
          Enjoy 5000+ crypto games, fast payouts and 24/7 live support. Make the best of the superior Bitcoin Casino.
        </p>
      </div> */}
      <div className='md:hidden'>

        <p className='text-center  pt-10 pb-10 '> 15 Crypto Networks  /  60 currencies </p>
      </div>
      <div className='flex justify-center gap-4 pb-5 pt-4 md:hidden'>
        <img src={BNB} alt='BNB Chain' />
        <img src={Bitcoin} alt='Bitcoin' />
        <img src={Ethereum} alt='Ethereum' />

      </div>
    </div>
  );
};

export default Banner;