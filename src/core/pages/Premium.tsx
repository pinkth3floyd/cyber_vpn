// import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Crown, Zap, Globe, ShieldCheck, Check } from 'lucide-react';
import { CyberBox } from '../elements/CyberBox';
import { BackgroundTech } from '../elements/BackgroundTech';

export const Premium = ({ setCurrentScreen }: any) => (
  <motion.div
    key="premium"
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="absolute inset-0 flex flex-col p-6 bg-secondary text-primary z-50 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
  >
    <BackgroundTech color="var(--bg-primary)" className="opacity-10" />
    <div className="flex items-center justify-between mt-6 mb-8 relative z-10">
      <CyberBox inverted className="w-12 h-12" onClick={() => setCurrentScreen('home')} innerClassName="flex items-center justify-center">
        <ArrowLeft className="w-6 h-6" />
      </CyberBox>
      <Crown className="w-8 h-8 text-primary" />
      <div className="w-12 h-12"></div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col items-center relative z-10">
      <h2 className="font-orbitron font-black text-4xl text-center mb-2">GO PREMIUM</h2>
      <p className="text-center opacity-80 mb-8 font-bold">Unlock the ultimate cyber experience.</p>

      <div className="w-full space-y-4 mb-8">
        {[
          { icon: Zap, text: "Ultra-Fast 10Gbps Servers" },
          { icon: Globe, text: "Access to 100+ Global Locations" },
          { icon: ShieldCheck, text: "Advanced Malware Protection" },
          { icon: Check, text: "Zero Logs Policy Guaranteed" }
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-4 bg-secondary brightness-125 p-4 cyber-clip">
            <feature.icon className="w-6 h-6 text-accent" />
            <span className="font-bold text-lg">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="w-full mt-auto mb-8">
        <CyberBox className="w-full h-20" innerClassName="flex flex-col items-center justify-center" onClick={() => setCurrentScreen('home')}>
          <span className="font-orbitron font-bold text-xl uppercase tracking-widest">Subscribe Now</span>
          <span className="font-bold text-sm opacity-80">$9.99 / month</span>
        </CyberBox>
      </div>
    </div>
  </motion.div>
);
