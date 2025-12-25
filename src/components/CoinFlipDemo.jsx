import React, { useState } from 'react';
import CoinFlip from './CoinFlip';

/**
 * Demo showcasing different configurations of the CoinFlip component
 */
const CoinFlipDemo = () => {
  const [isFlipping1, setIsFlipping1] = useState(false);
  const [isFlipping2, setIsFlipping2] = useState(false);

  const handleFlip1 = () => {
    setIsFlipping1(true);
    setTimeout(() => setIsFlipping1(false), 2000);
  };

  const handleFlip2 = () => {
    setIsFlipping2(true);
    setTimeout(() => setIsFlipping2(false), 2000);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      padding: '40px',
      background: 'linear-gradient(to bottom, #0f0f1e, #1a1a2e)',
      minHeight: '100vh',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        color: 'white', 
        fontSize: '48px',
        fontFamily: 'system-ui',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        CoinFlip Component Demo
      </h1>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '40px', 
        justifyContent: 'center',
        maxWidth: '1400px'
      }}>
        {/* Original Design */}
        <div>
          <h3 style={{ color: '#a78bfa', textAlign: 'center', marginBottom: '16px' }}>Original Design</h3>
          <CoinFlip />
        </div>

        {/* Custom Text & Icons */}
        <div>
          <h3 style={{ color: '#a78bfa', textAlign: 'center', marginBottom: '16px' }}>Custom Text & Icons</h3>
          <CoinFlip 
            title="COIN TOSS"
            subtitle="Double or Nothing"
            goldCoinIcon="👑"
            silverCoinIcon="⭐"
            onFlip={() => console.log('Toss!')}
          />
        </div>

        {/* Crypto Theme */}
        <div>
          <h3 style={{ color: '#a78bfa', textAlign: 'center', marginBottom: '16px' }}>Crypto Theme</h3>
          <CoinFlip 
            title="BTC FLIP"
            subtitle="Bitcoin Casino"
            goldCoinIcon="₿"
            silverCoinIcon="Ξ"
            accentColor="#f7931a"
          />
        </div>

        {/* Controlled Animation */}
        <div>
          <h3 style={{ color: '#a78bfa', textAlign: 'center', marginBottom: '16px' }}>Controlled Animation</h3>
          <CoinFlip 
            title="LUCKY DIP"
            subtitle="Try Your Luck"
            goldCoinIcon="🎰"
            silverCoinIcon="🎲"
            isFlipping={isFlipping1}
            onFlip={handleFlip1}
            accentColor="#10b981"
          />
          <button 
            onClick={handleFlip1}
            style={{
              marginTop: '20px',
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
            }}
          >
            Flip Now!
          </button>
        </div>

        {/* Sports Theme */}
        <div>
          <h3 style={{ color: '#a78bfa', textAlign: 'center', marginBottom: '16px' }}>Sports Theme</h3>
          <CoinFlip 
            title="PLAY BALL"
            subtitle="Championship"
            goldCoinIcon="⚽"
            silverCoinIcon="🏀"
            accentColor="#ef4444"
          />
        </div>

        {/* Casino Theme */}
        <div>
          <h3 style={{ color: '#a78bfa', textAlign: 'center', marginBottom: '16px' }}>Casino Theme</h3>
          <CoinFlip 
            title="HIGH ROLL"
            subtitle="Vegas Style"
            goldCoinIcon="💰"
            silverCoinIcon="💵"
            isFlipping={isFlipping2}
            onFlip={handleFlip2}
            accentColor="#fbbf24"
          />
          <button 
            onClick={handleFlip2}
            style={{
              marginTop: '20px',
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: '#1e1b4b',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)'
            }}
          >
            Roll the Dice
          </button>
        </div>
      </div>

      <div style={{
        background: 'rgba(139, 92, 246, 0.1)',
        padding: '30px',
        borderRadius: '16px',
        maxWidth: '800px',
        marginTop: '40px'
      }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Component Props:</h2>
        <ul style={{ color: '#a78bfa', lineHeight: '1.8', fontFamily: 'monospace' }}>
          <li><strong>title</strong>: Main title text (default: "X FLIP")</li>
          <li><strong>subtitle</strong>: Subtitle text (default: "Rollbit")</li>
          <li><strong>goldCoinIcon</strong>: Icon/emoji for gold coin (default: "🏆")</li>
          <li><strong>silverCoinIcon</strong>: Icon/emoji for silver coin (default: "💎")</li>
          <li><strong>onFlip</strong>: Callback function when coins are clicked</li>
          <li><strong>isFlipping</strong>: Control animation state externally</li>
          <li><strong>showTopIcon</strong>: Show/hide top left icon (default: true)</li>
          <li><strong>accentColor</strong>: Primary accent color (default: "#6366f1")</li>
        </ul>
      </div>
    </div>
  );
};

export default CoinFlipDemo;
