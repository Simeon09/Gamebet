import React, { useState, useEffect } from 'react';
import CashbackBalance from './CashbackBalance';

/**
 * Demo component showing various uses of the CashbackBalance component
 */
const CashbackBalanceDemo = () => {
  const [animatedBalance, setAnimatedBalance] = useState(0);
  
  // Simulate balance animation
  useEffect(() => {
    const targetBalance = 127.50;
    const duration = 2000;
    const steps = 60;
    const increment = targetBalance / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetBalance) {
        setAnimatedBalance(targetBalance);
        clearInterval(timer);
      } else {
        setAnimatedBalance(current);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          color: 'white', 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          marginBottom: '3rem',
          fontWeight: '700'
        }}>
          CashbackBalance Component Demo
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Default Configuration */}
          <div>
            <h3 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              Default
            </h3>
            <CashbackBalance />
          </div>
          
          {/* With Balance */}
          <div>
            <h3 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              With Balance
            </h3>
            <CashbackBalance 
              balance={animatedBalance}
              currency="EUR"
            />
          </div>
          
          {/* USD Currency */}
          <div>
            <h3 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              USD Currency
            </h3>
            <CashbackBalance 
              balance={245.99}
              currency="USD"
            />
          </div>
          
          {/* Custom Title */}
          <div>
            <h3 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              Custom Title
            </h3>
            <CashbackBalance 
              balance={1299.00}
              currency="GBP"
              title="REWARDS WALLET"
            />
          </div>
          
          {/* Custom Gradient - Ocean Theme */}
          <div>
            <h3 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              Ocean Theme
            </h3>
            <CashbackBalance 
              balance={88.50}
              currency="EUR"
              title="OCEAN REWARDS"
              gradientFrom="#0f766e"
              gradientTo="#06b6d4"
            />
          </div>
          
          {/* Custom Gradient - Sunset Theme */}
          <div>
            <h3 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              Sunset Theme
            </h3>
            <CashbackBalance 
              balance={567.25}
              currency="USD"
              title="SUNSET SAVINGS"
              gradientFrom="#991b1b"
              gradientTo="#ea580c"
            />
          </div>
        </div>
        
        {/* Usage Instructions */}
        <div style={{ 
          background: 'white', 
          borderRadius: '1rem', 
          padding: '2rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Usage
          </h2>
          
          <pre style={{ 
            background: '#1f2937', 
            color: '#10b981', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`import CashbackBalance from './CashbackBalance';

// Basic usage
<CashbackBalance />

// With props
<CashbackBalance 
  balance={127.50}
  currency="EUR"
  title="MY CASHBACK BALANCE"
  gradientFrom="#1e3a8a"
  gradientTo="#0891b2"
/>`}
          </pre>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '2rem', marginBottom: '1rem' }}>
            Props
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Prop</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Default</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>balance</td>
                <td style={{ padding: '0.75rem' }}>number</td>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>0.00</td>
                <td style={{ padding: '0.75rem' }}>The balance amount to display</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>currency</td>
                <td style={{ padding: '0.75rem' }}>string</td>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>'EUR'</td>
                <td style={{ padding: '0.75rem' }}>Currency code (EUR, USD, GBP, etc.)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>title</td>
                <td style={{ padding: '0.75rem' }}>string</td>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>'MY CASHBACK BALANCE'</td>
                <td style={{ padding: '0.75rem' }}>Title text displayed at the top</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>gradientFrom</td>
                <td style={{ padding: '0.75rem' }}>string</td>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>'#1e3a8a'</td>
                <td style={{ padding: '0.75rem' }}>Starting color of the gradient (hex)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>gradientTo</td>
                <td style={{ padding: '0.75rem' }}>string</td>
                <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>'#0891b2'</td>
                <td style={{ padding: '0.75rem' }}>Ending color of the gradient (hex)</td>
              </tr>
            </tbody>
          </table>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '2rem', marginBottom: '1rem' }}>
            Features
          </h3>
          
          <ul style={{ lineHeight: '1.75' }}>
            <li>✨ Smooth fade-in and scale animations</li>
            <li>🎨 Customizable gradient backgrounds</li>
            <li>💰 Animated coin graphics with floating effect</li>
            <li>🎯 Responsive design that works on all screen sizes</li>
            <li>⚡ Hover effects on balance display</li>
            <li>🔤 Beautiful typography with Outfit and Space Mono fonts</li>
            <li>🌟 Glassmorphism effect on balance container</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CashbackBalanceDemo;
