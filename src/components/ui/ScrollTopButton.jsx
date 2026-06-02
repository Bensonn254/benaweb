import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      
      setScrollProgress(scroll);
      setIsVisible(totalScroll > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div 
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: '25px',
        bottom: '25px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#1a2744', // BenaWeb navy for contrast
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#b8952a', // BenaWeb gold icon
        cursor: 'pointer',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'all 300ms ease',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.15)'
      }}
    >
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)'
        }}
      >
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="rgba(184, 149, 42, 0.2)"
          strokeWidth="3"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="#b8952a"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 100ms ease-out' }}
        />
      </svg>
      <FaArrowUp style={{ position: 'relative', zIndex: 2, fontSize: '18px' }} />
    </div>
  );
}
