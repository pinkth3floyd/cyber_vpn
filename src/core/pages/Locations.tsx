// import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, RefreshCw, Crown } from 'lucide-react';
import { CyberBox } from '../elements/CyberBox';
import { LocationItem } from '../elements/LocationItem';

export const Locations = ({ setCurrentScreen }: any) => (
  <motion.div
    key="locations"
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="absolute inset-0 flex flex-col p-6 z-20 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
  >
    <div className="flex justify-between items-center mt-6">
      <CyberBox className="w-12 h-12" onClick={() => setCurrentScreen('home')} innerClassName="flex items-center justify-center">
        <ArrowLeft className="w-6 h-6" />
      </CyberBox>
      <h2 className="font-orbitron font-bold text-xl">Location</h2>
      <CyberBox className="w-12 h-12" innerClassName="flex items-center justify-center" onClick={() => {}}>
        <RefreshCw className="w-5 h-5" />
      </CyberBox>
    </div>

    <div className="mt-8 flex-1 overflow-y-auto pb-24 no-scrollbar">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-4 bg-secondary skew-x-12" />
        <h3 className="font-bold uppercase tracking-widest text-sm">Smart Location</h3>
      </div>
      <LocationItem country="United States" location="Miami" ping="35 ms" flag="🇺🇸" isSmart={true} />

      <div className="flex items-center gap-2 mb-4 mt-6">
        <div className="w-2 h-4 bg-secondary skew-x-12" />
        <h3 className="font-bold uppercase tracking-widest text-sm">All Servers</h3>
      </div>
      <LocationItem country="United States" location="13 Locations" flag="🇺🇸" />
      <LocationItem country="India" location="4 Locations" flag="🇮🇳" />
      <LocationItem country="United Kingdom" location="3 Locations" flag="🇬🇧" />
      <LocationItem country="Germany" location="7 Locations" flag="🇩🇪" />
      <LocationItem country="Singapore" location="2 Locations" flag="🇸🇬" />
    </div>

    <div className="absolute bottom-8 left-6 right-6">
      <CyberBox inverted className="w-full h-16" innerClassName="flex items-center justify-center gap-3" onClick={() => setCurrentScreen('premium')}>
        <Crown className="w-5 h-5 text-primary" />
        <span className="font-bold uppercase tracking-widest text-primary">Upgrade to Premium</span>
      </CyberBox>
    </div>
  </motion.div>
);
