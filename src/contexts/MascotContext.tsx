import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface MascotContextType {
  position: { x: number; y: number };
  message: string | null;
  showMessage: boolean;
  setMessage: (message: string | null) => void;
}

const MascotContext = createContext<MascotContextType | undefined>(undefined);

const messages = [
  "Quack! Alex's code is cleaner than my feathers! 🦆",
  "Did you know Alex can debug faster than I can swim? 🏊‍♂️",
  "Alex's TypeScript skills make me go QUACK! 🎯",
  "Need a frontend wizard? Alex is your duck- I mean, pick! 🪄",
  "I've seen a lot of code, but Alex's is the quackiest! 🌟",
  "This portfolio is making waves! Get it? Because I'm a duck! 🌊",
  "Alex's React components are as smooth as my rubber coating! ✨",
  "Angular, React, TypeScript - Alex masters them all while I just float! 🎮",
  "Warning: Alex's code quality might make other developers duck for cover! 🎯",
  "Quack quack! (That's duck for 'Alex is awesome at web development!') 🦆"
];

export const MascotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [messageTimer, setMessageTimer] = useState<number | null>(null);
  const location = useLocation();

  // Handle scroll and update target position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const viewportWidth = window.innerWidth;
      
      // Calculate how far down the page we've scrolled (0 to 1)
      const scrollProgress = Math.min(scrollY / Math.max(documentHeight - windowHeight, 1), 1);
      
      // Keep the duck within viewport bounds with better constraints
      const maxX = Math.max(viewportWidth - 320, 20); // Account for speech bubble width + margin
      const maxY = Math.max(windowHeight - 160, 20); // Keep away from bottom with more margin
      
      // Position the duck on the right side, moving vertically with scroll
      const targetX = Math.min(maxX, viewportWidth - 140);
      const targetY = Math.max(40, Math.min(maxY, 120 + (maxY - 120) * scrollProgress));
      
      setTargetPosition({
        x: targetX,
        y: targetY
      });
      
      // Random chance to show a message when scrolling
      if (Math.random() < 0.01 && !showMessage) {
        showRandomMessage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    // Initial position
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [showMessage]);

  // Route change handler
  useEffect(() => {
    showRandomMessage();
  }, [location]);

  // Smooth animation for mascot movement
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.1,
        y: prev.y + (targetPosition.y - prev.y) * 0.1
      }));
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [targetPosition, position]);

  // Handle message display
  const showRandomMessage = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    setShowMessage(true);
    
    // Clear existing timer
    if (messageTimer) {
      window.clearTimeout(messageTimer);
    }
    
    // Set new timer to hide message
    const timer = window.setTimeout(() => {
      setShowMessage(false);
    }, 4000);
    
    setMessageTimer(timer);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (messageTimer) {
        window.clearTimeout(messageTimer);
      }
    };
  }, [messageTimer]);

  return (
    <MascotContext.Provider value={{ position, message, showMessage, setMessage }}>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = () => {
  const context = useContext(MascotContext);
  if (context === undefined) {
    throw new Error('useMascot must be used within a MascotProvider');
  }
  return context;
};