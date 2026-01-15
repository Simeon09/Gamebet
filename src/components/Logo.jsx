import React from 'react'
import logoImage from './assets/AGT.png';
import logoImage1 from './assets/AMATIC.png';
import logoImage2 from './assets/AMUSNET.png';
import logoImage3 from './assets/ApoloLogo.png';
import logoImage4 from './assets/AsiaGaming.png';
import logoImage5 from './assets/BARLogo.png';
import logoImage6 from './assets/NetworkLogo.png';





function Logo() {
  console.log('Logo component rendered');
  const logoArray = [logoImage1, logoImage2, logoImage3, logoImage4, logoImage5, logoImage, logoImage6];

  return (
    <div> {/* Added flex layout for better display */}
      <h5 className="pt-9">PROVIDERS</h5>
      <div className='flex flex-wrap  justify-center pt-3'>{/* Flex container for logos with spacing */}


        {logoArray.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}

            className={`w-22 h-16 object-contain ${index >= 3 ? 'hidden md:block' : ''}`}
            onError={(e) => console.error(`Failed to load logo ${index + 1}:`, e.target.src)}
          />
        ))}
      </div>
    </div>

  )
}

export default Logo
