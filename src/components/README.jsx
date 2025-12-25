import React, { useState } from 'react';

/**
 * CoinFlip - A reusable animated coin flip component
 * 
 * Props:
 * - title: Main title text (default: "X FLIP")
 * - subtitle: Subtitle text (default: "Rollbit")
 * - goldCoinIcon: Icon/emoji for gold coin (default: "🏆")
 * - silverCoinIcon: Icon/emoji for silver coin (default: "💎")
 * - onFlip: Callback function when coins are clicked
 * - isFlipping: Control animation state externally
 * - showTopIcon: Show/hide top left icon (default: true)
 * - accentColor: Primary accent color (default: purple)
 */
const CoinFlip = ({ 
  title = "X FLIP",
  subtitle = "Rollbit",
  goldCoinIcon = "🏆",
  silverCoinIcon = "💎",
  onFlip,
  isFlipping: externalFlipping,
  showTopIcon = true,
  accentColor = "#6366f1"
}) => {
  const [internalFlipping, setInternalFlipping] = useState(false);
  const isFlipping = externalFlipping !== undefined ? externalFlipping : internalFlipping;

  const handleCoinClick = () => {
    if (!externalFlipping) {
      setInternalFlipping(true);
      setTimeout(() => setInternalFlipping(false), 2000);
    }
    if (onFlip) onFlip();
  };

  return (
    <div className="coin-flip-container">
      <style>{`
        .coin-flip-container {
          position: relative;
          width: 340px;
          height: 480px;
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        .coin-flip-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .top-icon {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 48px;
          height: 48px;
          background: ${accentColor};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .coins-container {
          position: relative;
          width: 280px;
          height: 240px;
          margin-bottom: 20px;
          cursor: pointer;
          perspective: 1000px;
        }

        .coin {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 72px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            inset 0 -8px 20px rgba(0, 0, 0, 0.3),
            inset 0 8px 20px rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
          transform-style: preserve-3d;
        }

        .coin:hover {
          transform: scale(1.05) translateY(-5px);
        }

        .coin.gold {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          top: 10px;
          left: 50px;
          z-index: 2;
          animation: ${isFlipping ? 'flipGold 2s ease-in-out' : 'floatGold 3s ease-in-out infinite'};
        }

        .coin.silver {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
          bottom: 10px;
          right: 50px;
          z-index: 1;
          animation: ${isFlipping ? 'flipSilver 2s ease-in-out' : 'floatSilver 3s ease-in-out infinite 1.5s'};
        }

        @keyframes floatGold {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes floatSilver {
          0%, 100% { transform: translateY(0px) rotate(5deg); }
          50% { transform: translateY(-12px) rotate(-5deg); }
        }

        @keyframes flipGold {
          0% { 
            transform: translateY(0px) rotateY(0deg);
          }
          25% {
            transform: translateY(-60px) rotateY(180deg) scale(1.2);
          }
          50% {
            transform: translateY(-40px) rotateY(360deg) scale(1.1);
          }
          75% {
            transform: translateY(-20px) rotateY(540deg);
          }
          100% { 
            transform: translateY(0px) rotateY(720deg);
          }
        }

        @keyframes flipSilver {
          0% { 
            transform: translateY(0px) rotateY(0deg);
          }
          25% {
            transform: translateY(-50px) rotateY(-180deg) scale(1.15);
          }
          50% {
            transform: translateY(-35px) rotateY(-360deg) scale(1.1);
          }
          75% {
            transform: translateY(-15px) rotateY(-540deg);
          }
          100% { 
            transform: translateY(0px) rotateY(-720deg);
          }
        }

        .title {
          font-size: 56px;
          font-weight: 900;
          color: white;
          letter-spacing: 4px;
          margin: 0;
          text-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(139, 92, 246, 0.4);
          text-align: center;
          animation: ${isFlipping ? 'pulse 2s ease-in-out' : 'none'};
        }

        .subtitle {
          font-size: 20px;
          font-weight: 500;
          color: #a78bfa;
          letter-spacing: 2px;
          margin-top: 8px;
          text-align: center;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .coin-inner {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        @media (max-width: 400px) {
          .coin-flip-container {
            width: 100%;
            height: 100vh;
            border-radius: 0;
          }
        }
      `}</style>

      {showTopIcon && (
        <div className="top-icon">
          {goldCoinIcon}
        </div>
      )}

      <div className="coins-container" onClick={handleCoinClick}>
        <div className="coin gold">
          <span className="coin-inner">{goldCoinIcon}</span>
        </div>
        <div className="coin silver">
          <span className="coin-inner">{silverCoinIcon}</span>
        </div>
      </div>

      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default CoinFlip;

// Example usage:
// 
// import CoinFlip from './CoinFlip';
// 
// function App() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0f0f1e' }}>
//       <CoinFlip 
//         title="COIN TOSS"
//         subtitle="Win Big"
//         goldCoinIcon="👑"
//         silverCoinIcon="⭐"
//         onFlip={() => console.log('Coins flipped!')}
//       />
//     </div>
//   );
// }
