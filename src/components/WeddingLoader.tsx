import React from 'react';

interface WeddingLoaderProps {
  message?: string;
}

const WeddingLoader: React.FC<WeddingLoaderProps> = ({ 
  message = "Sending your RSVP..." 
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      minHeight: '200px'
    }}>
      {/* Animated wedding rings */}
      <div style={{
        position: 'relative',
        width: '80px',
        height: '80px',
        marginBottom: '1.5rem'
      }}>
        {/* Ring 1 */}
        <div style={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          border: '4px solid #80968B',
          borderRadius: '50%',
          borderTopColor: 'transparent',
          animation: 'spin 2s linear infinite',
          top: '0',
          left: '0'
        }} />
        
        {/* Ring 2 */}
        <div style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          border: '3px solid #DAB1DA',
          borderRadius: '50%',
          borderTopColor: 'transparent',
          animation: 'spin 1.5s linear infinite reverse',
          top: '10px',
          left: '10px'
        }} />
        
        {/* Center heart */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 1s ease-in-out infinite'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#B8860B">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>

      {/* Loading text */}
      <div style={{
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '1.1rem',
        fontWeight: '500',
        marginBottom: '1rem',
        fontFamily: 'var(--font-playfair), "Playfair Display", serif'
      }}>
        {message}
      </div>

      {/* Animated dots */}
      <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#80968B',
              animation: `bounce 1.4s ease-in-out infinite`,
              animationDelay: `${i * 0.16}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default WeddingLoader;
