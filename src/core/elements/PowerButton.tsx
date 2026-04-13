// import React from 'react';
import { motion } from 'motion/react';
import { Power } from 'lucide-react';

export const PowerButton = ({ isConnected, toggleConnection }: any) => {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center mt-4">
      <motion.div
        animate={{ rotate: isConnected ? 360 : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-[2px] border-dashed border-secondary opacity-60"
      />
      <motion.div
        animate={{ rotate: isConnected ? -360 : 0 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border-[2px] border-secondary"
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-secondary -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-secondary -translate-x-1/2 translate-y-1/2 rotate-45" />
        <div className="absolute left-0 top-1/2 w-3 h-3 bg-secondary -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <div className="absolute right-0 top-1/2 w-3 h-3 bg-secondary translate-x-1/2 -translate-y-1/2 rotate-45" />
      </motion.div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleConnection}
        className={`relative z-10 w-28 h-28 rounded-full flex items-center justify-center border-[4px] transition-all duration-300 bg-secondary`}
        style={{
           boxShadow: isConnected ? '0 0 25px var(--accent), inset 0 0 15px var(--accent)' : 'none',
           borderColor: isConnected ? 'var(--accent)' : 'var(--fg-primary)'
        }}
      >
        <Power className={`w-10 h-10 transition-colors duration-300 ${isConnected ? 'text-accent' : 'text-primary'}`} />
      </motion.button>
    </div>
  );
};
