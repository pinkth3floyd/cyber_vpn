// import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export const Splash = () => (
  <motion.div
    key="splash"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0 flex flex-col items-center justify-center z-50 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5 }}
      className="flex flex-col items-center"
    >
      <ShieldCheck className="w-24 h-24 mb-6 text-secondary" />
      <h1 className="font-orbitron font-black italic text-5xl tracking-tighter text-center">CYBER<br/>VPN</h1>
      
      <div className="mt-12 w-64 h-3 bg-secondary p-1 cyber-clip">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-accent"
        />
      </div>
      <div className="mt-4 font-bold uppercase tracking-widest text-sm animate-pulse">Initializing System...</div>
    </motion.div>
  </motion.div>
);
