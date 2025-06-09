import React from 'react';
import { useMascot } from '../contexts/MascotContext';
import { motion, AnimatePresence } from 'framer-motion';

const Mascot: React.FC = () => {
  const { position, message, showMessage } = useMascot();

  return (
    <div 
      className="mascot-container fixed z-40 pointer-events-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      {/* Message Bubble */}
      <AnimatePresence>
        {showMessage && message && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute right-16 top-0 bg-gptcard p-4 rounded-2xl shadow-gpt pointer-events-none max-w-[240px] text-sm border border-gptborder"
            style={{ 
              transformOrigin: 'bottom right',
            }}
          >
            {/* Speech bubble tail */}
            <div className="absolute right-0 bottom-4 w-4 h-4 bg-gptcard border-r border-b border-gptborder transform translate-x-1/2 rotate-45"></div>
            <p className="relative z-10 text-gpttext font-medium">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Duck Mascot */}
      <motion.div 
        className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center shadow-gpt relative overflow-hidden border-2 border-yellow-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        whileHover={{ scale: 1.1 }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7}
      >
        {/* Duck's body */}
        <div className="absolute inset-0 bg-yellow-400"></div>
        {/* Duck's eye */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
        {/* Duck's beak */}
        <div className="absolute top-6 left-3 w-4 h-4 bg-orange-500 rounded-lg transform -rotate-12"></div>
      </motion.div>
    </div>
  );
};

export default Mascot;