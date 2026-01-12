import React from 'react'
import CupAward from './assets/CupAward.png';
import SevenSeven from './assets/777.svg';
import Filters from './assets/Filter.svg';

const Frame = () => {
    return (
        <div>

            Frame
            <img src={CupAward} alt="Cup Award" />

            <div className="flex items-center justify-between w-full px-4 py-3">
                <div className='flex items-center gap-2 text-md  items-center'><span> <img src={SevenSeven} alt="Seven Seven" /></span> <h5> LEADER BOARD </h5></div>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-3'>
                        <button className="px-4 py-1.5 text-sm rounded-md bg-yellow-500 text-black font-medium hover:bg-yellow-400"> All Bets</button>
                        <button className="px-4 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-600">Last Wins </button>
                        <button className="px-4 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-600">Big Wins</button>
                    </div>
                    <div className='flex items-center align-middle align-center width-15'>
                        <button className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-600"> <img src={Filters} alt="Trophy" /> Filters  </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Frame