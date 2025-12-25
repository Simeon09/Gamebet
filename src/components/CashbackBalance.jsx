import React from 'react';

/**
 * CashbackBalance Component
 * A reusable, visually striking cashback balance card with animations
 * 
 * @param {number} balance - The balance amount to display
 * @param {string} currency - Currency code (e.g., 'EUR', 'USD', 'GBP')
 * @param {string} title - Title text (default: 'MY CASHBACK BALANCE')
 * @param {string} gradientFrom - Starting color of gradient (default: '#1e3a8a')
 * @param {string} gradientTo - Ending color of gradient (default: '#0891b2')
 */
const CashbackBalance = ({ 
  balance = 0.00, 
  currency = 'EUR',
  title = 'MY CASHBACK BALANCE',
  gradientFrom = '#1e3a8a',
  gradientTo = '#0891b2'
}) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Space+Mono:wght@700&display=swap');
        
        .cashback-card {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%);
          animation: fadeIn 0.6s ease-out;
        }
        
        .balance-text {
          font-family: 'Space Mono', monospace;
          animation: countUp 0.8s ease-out;
        }
        
        .coin {
          animation: float 3s ease-in-out infinite;
        }
        
        .coin-1 {
          animation-delay: 0s;
        }
        
        .coin-2 {
          animation-delay: 0.5s;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        .glow-border {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
                      inset 0 0 20px rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .glow-border:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.2),
                      inset 0 0 30px rgba(255, 255, 255, 0.1);
        }
        
        .title-text {
          letter-spacing: 0.15em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
      
      <div className="cashback-card rounded-3xl p-8 shadow-2xl overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          {/* Title */}
          <h2 className="title-text text-white text-sm font-semibold text-center mb-6 opacity-90">
            {title}
          </h2>
          
          {/* Balance Display */}
          <div className="glow-border bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <p className="balance-text text-white text-4xl font-bold text-center tracking-tight">
              {balance.toFixed(2)} {currency}
            </p>
          </div>
          
          {/* Coin Graphics */}
          <div className="flex justify-center items-end gap-4 mt-6">
            {/* Gold Coin */}
            <svg className="coin coin-1 w-20 h-20" viewBox="0 0 100 100" fill="none">
              {/* Outer ring */}
              <circle cx="50" cy="50" r="45" fill="url(#goldGradient)" />
              <circle cx="50" cy="50" r="45" fill="url(#goldShine)" opacity="0.3" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#D97706" strokeWidth="2" opacity="0.4" />
              
              {/* Inner circle */}
              <circle cx="50" cy="50" r="35" fill="#1F2937" />
              
              {/* Lightning bolt icon */}
              <path d="M55 30L40 55H50L45 75L65 48H53L55 30Z" fill="#FBBF24" />
              
              {/* Highlights */}
              <circle cx="35" cy="35" r="8" fill="white" opacity="0.3" />
              
              <defs>
                <radialGradient id="goldGradient">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </radialGradient>
                <radialGradient id="goldShine">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
            
            {/* Purple/Pink Coin */}
            <svg className="coin coin-2 w-20 h-20" viewBox="0 0 100 100" fill="none">
              {/* Outer ring */}
              <circle cx="50" cy="50" r="45" fill="url(#purpleGradient)" />
              <circle cx="50" cy="50" r="45" fill="url(#purpleShine)" opacity="0.3" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#7C3AED" strokeWidth="2" opacity="0.4" />
              
              {/* Inner circle */}
              <circle cx="50" cy="50" r="35" fill="#1F2937" />
              
              {/* Gear/Cog pattern */}
              <g transform="translate(50,50)">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <rect 
                    key={i}
                    x="-3" 
                    y="-20" 
                    width="6" 
                    height="10" 
                    fill="#A78BFA"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="12" fill="#7C3AED" />
                <circle cx="0" cy="0" r="6" fill="#1F2937" />
              </g>
              
              {/* Highlights */}
              <circle cx="35" cy="35" r="8" fill="white" opacity="0.3" />
              
              <defs>
                <radialGradient id="purpleGradient">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </radialGradient>
                <radialGradient id="purpleShine">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashbackBalance;
