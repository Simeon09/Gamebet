import React from 'react';
import Gamespot from '../components/assets/Kika.png';
import Twitter from '../components/assets/mdi-twitter.svg';
import Instagram from '../components/assets/instagram.svg';
import TRON from '../components/assets/Tron.svg';
import Tether from '../components/assets/tether.svg';
import Bitcon from '../components/assets/Bitcoin.svg';
import Biswap from '../components/assets/biswap.svg';
import Ethereum from '../components/assets/ethereum.svg';
import BNBChain from '../components/assets/BNB.svg';
import ArrowDown from '../components/assets/arrow-down.svg';

const cryptoLogos = [
    { src: TRON, alt: 'TRON' },
    { src: Tether, alt: 'Tether' },
    { src: Bitcon, alt: 'Bitcoin' },
    { src: Ethereum, alt: 'Ethereum' },
    { src: Biswap, alt: 'Biswap' },
    { src: BNBChain, alt: 'BNB Chain' },
    { src: Bitcon, alt: 'Bitcoin' }, // Duplicate, consider if this is intentional
];



const Footer = () => {
    return (
        <div className='mt-32 border-t border-white/10 pt-16 pb-8 bg-[#382653] px-12'>

            <div className='grid grid-cols-2 gap-8 md:flex md:justify-between px-8'>
                <div className='Logo col-span-2 md:col-auto'>
                    <img src={Gamespot} alt='image' />
                    <span className='flex gap-4 pt-5'>

                        <img src={Twitter} alt='X' />
                        <img src={Instagram} alt='Instagram' />
                    </span>
                </div>
                <div className='Links'>
                    <h6 className="text-accent-white font-bold mb-4">HELPFUL LINKS</h6>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>All Games</li>
                        <li>Slots</li>
                        <li>Rank System</li>
                        <li>Live Casino</li>
                        <li>Crash</li>

                    </ul>
                </div>
                <div className='Platform'>
                    <h6 className="text-accent-white font-bold mb-4">PLATFORM</h6>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>Support</li>
                        <li>FAQ</li>
                        <li>Slots</li>
                        <li>Partnership</li>
                        <li>Blog</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className='About'>
                    <h6 className="text-accent-white font-bold mb-4">ABOUT US</h6>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>Sports Policy</li>
                        <li>Responsible Gaming </li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>AML Policy</li>

                    </ul>
                </div>
                <div className='Community'>
                    <h5 className="text-accent-white font-bold mb-4 ">COMMUNITY</h5>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>AML Policy</li>
                        <li>Sports Policy</li>
                        <li>Responsible Gaming</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between md:justify-center md:gap-8 border-y border-[#625D82] py-[12px] mt-9'>
                {cryptoLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className={`w-20 h-10 object-contain ${index >= 3 ? 'hidden md:block' : ''}`}
                    />
                ))}
            </div>
            <div>
                <p className='text-[#625D82] pt-8 pb-8  border-y border-[#625D82]'> kikabet is operated by Prolific Trade N.V., company registration number 150731, with registered address at Groot Kwartierweg 10, Curaçao and is licensed and authorized by the Government of Curacao and operates under the Master License of Gaming Services Provider, N.V. #365/JAZ License Number: GLH-OCCHKTW0709172018. Payment agent company is Horangi Trading Limited with address Chytron, 30, 2nd floor, Flat/Office A22, 1075, Nicosia, Cyprus and Registration number: HE 411494.
                    Gambling can be addictive. Please play responsibly. Blaze only accepts customers over 18 years of age.</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 text-[#B6ADC5] pt-8 pb-8 text-sm'>
                <div><p>© 2023 kikabet All rights reserved.</p></div>
                <div><span className='flex'>EN <img src={ArrowDown} alt="Payout Icon" /></span></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center text-[#E6D3F9] text-sm pb-8 pt-8'>
                <p className='px-3'> Support    support@kikabet </p>
                <p className='px-2 hidden md:block'> |</p>
                <p className='px-2'>Partner    spartners@kikabet </p>
                <p className='px-2 hidden md:block'>|</p>
                <p className='px-2'>Legal    legal@kikabet</p>
            </div>


        </div>
    )
}

export default Footer