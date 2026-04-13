// import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { CyberBox } from '../elements/CyberBox';

export const TextPage = ({ title, content, onBack }: any) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="absolute inset-0 flex flex-col p-6 z-40 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
  >
    <div className="flex items-center mt-6 mb-8">
      <CyberBox className="w-12 h-12" onClick={onBack} innerClassName="flex items-center justify-center">
        <ArrowLeft className="w-6 h-6" />
      </CyberBox>
      <h2 className="font-orbitron font-bold text-2xl ml-4 uppercase">{title}</h2>
    </div>
    <div className="flex-1 overflow-y-auto no-scrollbar pb-12">
      <div className="bg-secondary text-primary p-6 cyber-clip">
        <div className="font-rajdhani text-lg leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  </motion.div>
);
