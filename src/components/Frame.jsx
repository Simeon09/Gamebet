import React from 'react'
import CupAward from './assets/CupAward.png';
import SevenSeven from './assets/777.svg';
import Filters from './assets/Filter.svg';
import Game from './assets/mask-group-1.png';
import Player from './assets/mask-group.png';
import Bet from './assets/icon-4.png';
import ArrowDown from './assets/arrow-down.svg';
import ArrowGrowth from './assets/growthArrow.png'
import DownArrow from './assets/downArrow.png'

const Frame = () => {
    return (
        <div className='relative mb-20' >
            <div>
                <img src={CupAward} alt="Cup Award" className='z-10 relative w-full' />

            </div>
            <div className='relative z-50 w-[90%] mx-auto -mt-[25%] md:-mt-48'>

                <div className="flex items-center justify-between w-full px-4 py-3 ">
                    <div className='flex items-center gap-2 text-md  items-center'><span> <img src={SevenSeven} alt="Seven Seven" /></span> <h5> LEADER BOARD </h5></div>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='hidden md:block flex items-center gap-3'>
                            <button className="px-4 py-1.5 text-sm rounded-md bg-yellow-500 text-black font-medium hover:bg-yellow-400"> All Bets</button>
                            <button className="px-4 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-600">Last Wins </button>
                            <button className="px-4 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-600">Big Wins</button>
                        </div>
                        <div className='flex items-center align-middle align-center width-15'>
                            <button className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-600"> <img src={Filters} alt="Trophy" /> Filters  </button>
                        </div>
                    </div>
                </div>
                <div className='Frame pb-5'>
                    <div className='hidden md:flex items-center justify-between w-full px-4 py-3 '>
                        <h5>Game</h5>
                        <h5>Player</h5>
                        <h5>Time</h5>
                        <h5>Bet</h5>
                        <h5>Multiplier</h5>
                        <h5>Payout</h5>
                    </div>
                    <div className=' mobileframe bg-[#27285180]  px-7 py-3 rounded md-hidden'>
                        <div className='flex  mb-4 md:hidden' >
                            <div className=' flex  w-[80%] rounded-[10px] bg-[#272851] pt-2 pb-2 px-4'>

                                <div className='flex rounded-[10px]   items-center gap-2  '> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Fearofmissing <p className='text-[#A9A9A9] text-sm'>
                                    Mystery Museum </p> </h5></div>
                                <div className='flex items-center gap-2 '> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5>
                                    <br />

                                    <h5 className=" block text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5>

                                </div>
                            </div>
                            <button className='bg-[#00DA1E]   gap-1 px-2 rounded-r-[10px]'> <img src={ArrowGrowth} alt='arrow' className='flex items-center justify-center' /> +$120.5</button>

                        </div>
                        <div className='flex mb-4 md:hidden ' >
                            <div className=' flex  w-[80%] rounded-[10px] bg-[#272851] pt-2 pb-2 px-4'>

                                <div className='flex rounded-[10px]   items-center gap-2  '> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Fearofmissing <p className='text-[#A9A9A9] text-sm'>
                                    Mystery Museum </p> </h5></div>
                                <div className='flex items-center gap-2 '> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5>
                                    <br />

                                    <h5 className=" block text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5>

                                </div>
                            </div>
                            <button className='bg-[#00DA1E]   gap-1 px-2 rounded-r-[10px]'> <img src={ArrowGrowth} alt='arrow' className='flex items-center justify-center' /> +$120.5</button>

                        </div>
                        <div className='flex  mb-4 md:hidden ' >
                            <div className=' flex   w-[80%] rounded-[10px] bg-[#272851] pt-2 pb-2 px-4'>

                                <div className='flex rounded-[10px]   items-center gap-2  '> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Fearofmissing <p className='text-[#A9A9A9] text-sm'>
                                    Mystery Museum </p> </h5></div>
                                <div className='flex items-center gap-2 '> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5>
                                    <br />

                                    <h5 className=" block text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5>

                                </div>
                            </div>
                            <button className='bg-[#A04613]   gap-1 px-2 rounded-r-[10px]'> <img src={DownArrow} alt='arrow' className='flex items-center justify-center' /> +$120.5</button>

                        </div>
                        <div className='flex  mb-4 md:hidden ' >
                            <div className=' flex  w-[80%] rounded-[10px] bg-[#272851] pt-2 pb-2 px-4'>

                                <div className='flex rounded-[10px]   items-center gap-2  '> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Fearofmissing <p className='text-[#A9A9A9] text-sm'>
                                    Mystery Museum </p> </h5></div>
                                <div className='flex items-center gap-2 '> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5>
                                    <br />

                                    <h5 className=" block text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5>

                                </div>
                            </div>
                            <button className='bg-[#00DA1E]   gap-1 px-2 rounded-r-[10px]'> <img src={ArrowGrowth} alt='arrow' className='flex items-center justify-center' /> +$120.5</button>

                        </div>
                        <div className='flex  mb-4 md:hidden ' >
                            <div className=' flex  w-[80%] rounded-[10px] bg-[#272851] pt-2 pb-2 px-4'>

                                <div className='flex rounded-[10px]   items-center gap-2  '> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Fearofmissing <p className='text-[#A9A9A9] text-sm'>
                                    Mystery Museum </p> </h5></div>
                                <div className='flex items-center gap-2 '> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5>
                                    <br />

                                    <h5 className=" block text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5>

                                </div>
                            </div>
                            <button className='bg-[#00DA1E]   gap-1 px-2 rounded-r-[10px]'> <img src={ArrowGrowth} alt='arrow' className='flex items-center justify-center' /> +$120.5</button>

                        </div>
                        <div className='flex  mb-4 md:hidden ' >
                            <button className='bg-[#5855E1]  w-[99%]  text-white  py-3 rounded-md'> Submit </button>
                        </div>
                    </div>

                    <div className=' hidden md:block payout bg-[#4A4566]   rounded-xl'  >
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm border-b border-white'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#00B30A] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm border-b border-white'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#00B30A] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm border-b border-white'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#00B30A] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm border-b border-white'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#00B30A] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm border-b border-white'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#00B30A] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm border-b border-white'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#A04613] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm border-b border-white'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#00B30A] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                        <section className='flex items-center justify-between w-full px-4 py-3 text-sm'>
                            <div className='flex items-center gap-2'> <img src={Game} alt="Game Icon" className="w-6 h-6" /><h5> Mystery Museum </h5></div>
                            <div className='flex items-center gap-2'> <img src={Player} alt="Player Icon" className="w-6 h-6" /><h5> Player Name </h5></div>
                            <div className='flex items-center gap-2'> <h5> 12:00 PM </h5></div>
                            <div className='flex items-center gap-2'> <img src={Bet} alt="Bet Icon" className="w-4 h-4" /><h5> $10 </h5></div>
                            <div className='flex items-center gap-2'> <h5 className="text-[#00DA1E] font-semibold text-sm tracking-wide"> 3.32x </h5></div>
                            <button className='flex items-center gap-2 bg-[#00B30A] px-2 py-1 rounded-md'>  <img src={ArrowDown} alt="Payout Icon" className="w-5 h-5 rounded-sm bg-white/20 p-0.5" /><h5> +$120.5 </h5></button>
                        </section>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Frame