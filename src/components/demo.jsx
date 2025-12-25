import React, { useState } from 'react';

const CoinFlipDemo = () => {
  const [isFlipping1, setIsFlipping1] = useState(false);
  const [isFlipping2, setIsFlipping2] = useState(false);
  const [result, setResult] = useState(null);

  const handleFlip1 = () => {
    setIsFlipping1(true);
    setTimeout(() => {
      setIsFlipping1(false);
      const outcomes = ['Gold Wins! 🎉', 'Silver Wins! ✨'];
      setResult(outcomes[Math.floor(Math.random() * outcomes.length)]);
    }, 2000);
  };

  const handleFlip2 = () => {
    setIsFlipping2(true);
    setTimeout(() => setIsFlipping2(false), 2000);
  };

  return (
    <div className="demo-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .demo-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #0f0f1e, #1a1a2e);
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .demo-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .demo-title {
          font-size: 56px;
          font-weight: 900;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
        }

        .demo-subtitle {
          font-size: 20px;
          color: #a78bfa;
          font-weight: 500;
        }

        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
          max-width: 1400px;
          margin: 0 auto 60px;
        }

        .card-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card-title {
          color: #a78bfa;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

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
          background: var(--accent-color, #6366f1);
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
        }

        .coin.silver {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
          bottom: 10px;
          right: 50px;
          z-index: 1;
        }

        .coin.gold.floating {
          animation: floatGold 3s ease-in-out infinite;
        }

        .coin.silver.floating {
          animation: floatSilver 3s ease-in-out infinite 1.5s;
        }

        .coin.gold.flipping {
          animation: flipGold 2s ease-in-out;
        }

        .coin.silver.flipping {
          animation: flipSilver 2s ease-in-out;
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
          0% { transform: translateY(0px) rotateY(0deg); }
          25% { transform: translateY(-60px) rotateY(180deg) scale(1.2); }
          50% { transform: translateY(-40px) rotateY(360deg) scale(1.1); }
          75% { transform: translateY(-20px) rotateY(540deg); }
          100% { transform: translateY(0px) rotateY(720deg); }
        }

        @keyframes flipSilver {
          0% { transform: translateY(0px) rotateY(0deg); }
          25% { transform: translateY(-50px) rotateY(-180deg) scale(1.15); }
          50% { transform: translateY(-35px) rotateY(-360deg) scale(1.1); }
          75% { transform: translateY(-15px) rotateY(-540deg); }
          100% { transform: translateY(0px) rotateY(-720deg); }
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
        }

        .title.pulsing {
          animation: pulse 2s ease-in-out;
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

        .action-button {
          margin-top: 20px;
          width: 100%;
          max-width: 340px;
          padding: 16px;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(139, 92, 246, 0.6);
        }

        .action-button:active {
          transform: translateY(0);
        }

        .result-display {
          margin-top: 16px;
          padding: 16px 32px;
          background: rgba(139, 92, 246, 0.2);
          border: 2px solid #8b5cf6;
          border-radius: 12px;
          color: white;
          font-size: 24px;
          font-weight: 700;
          text-align: center;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .info-section {
          background: rgba(139, 92, 246, 0.1);
          padding: 40px;
          border-radius: 24px;
          max-width: 900px;
          margin: 0 auto;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .info-title {
          color: white;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .info-list {
          color: #a78bfa;
          line-height: 1.8;
          font-family: 'Courier New', monospace;
          font-size: 16px;
        }

        .info-list li {
          margin-bottom: 12px;
        }

        .info-list strong {
          color: #c4b5fd;
        }

        @media (max-width: 768px) {
          .demo-title {
            font-size: 36px;
          }
          
          .coin-flip-container {
            width: 300px;
            height: 420px;
          }

          .coin {
            width: 150px;
            height: 150px;
            font-size: 60px;
          }

          .title {
            font-size: 42px;
          }
        }
      `}</style>

      <div className="demo-header">
        <h1 className="demo-title">CoinFlip Component</h1>
        <p className="demo-subtitle">Interactive & Reusable React Component</p>
      </div>

      <div className="cards-grid">
        {/* Interactive Example */}
        <div className="card-wrapper">
          <div className="card-title">🎮 Interactive Demo</div>
          <div className="coin-flip-container" style={{'--accent-color': '#6366f1'}}>
            <div className="top-icon">🏆</div>
            <div className="coins-container" onClick={handleFlip1}>
              <div className={`coin gold ${isFlipping1 ? 'flipping' : 'floating'}`}>
                <span className="coin-inner">🏆</span>
              </div>
              <div className={`coin silver ${isFlipping1 ? 'flipping' : 'floating'}`}>
                <span className="coin-inner">💎</span>
              </div>
            </div>
            <h1 className={`title ${isFlipping1 ? 'pulsing' : ''}`}>X FLIP</h1>
            <p className="subtitle">Rollbit</p>
          </div>
          <button className="action-button" onClick={handleFlip1}>
            🎲 Click to Flip!
          </button>
          {result && <div className="result-display">{result}</div>}
        </div>

        {/* Crypto Theme */}
        <div className="card-wrapper">
          <div className="card-title">₿ Crypto Theme</div>
          <div className="coin-flip-container" style={{'--accent-color': '#f7931a'}}>
            <div className="top-icon">₿</div>
            <div className="coins-container" onClick={handleFlip2}>
              <div className={`coin gold ${isFlipping2 ? 'flipping' : 'floating'}`}>
                <span className="coin-inner">₿</span>
              </div>
              <div className={`coin silver ${isFlipping2 ? 'flipping' : 'floating'}`}>
                <span className="coin-inner">Ξ</span>
              </div>
            </div>
            <h1 className={`title ${isFlipping2 ? 'pulsing' : ''}`}>BTC FLIP</h1>
            <p className="subtitle">Crypto Casino</p>
          </div>
          <button className="action-button" onClick={handleFlip2}>
            💰 Start Flip
          </button>
        </div>
      </div>

      <div className="info-section">
        <h2 className="info-title">✨ Component Features</h2>
        <ul className="info-list">
          <li><strong>title</strong> - Customize the main title text</li>
          <li><strong>subtitle</strong> - Add your own subtitle</li>
          <li><strong>goldCoinIcon</strong> - Any emoji or icon for the gold coin</li>
          <li><strong>silverCoinIcon</strong> - Any emoji or icon for the silver coin</li>
          <li><strong>onFlip</strong> - Callback function for flip events</li>
          <li><strong>isFlipping</strong> - Control animation state externally</li>
          <li><strong>showTopIcon</strong> - Toggle top-left corner icon</li>
          <li><strong>accentColor</strong> - Customize the primary color scheme</li>
        </ul>
      </div>
    </div>
  );
};

export default CoinFlipDemo;
