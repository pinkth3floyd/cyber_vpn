// import React from 'react'; 
import { motion } from 'motion/react';
import { ArrowLeft, Info, Shield, FileText, Moon, Sun, Zap, LogOut } from 'lucide-react';
import { CyberBox } from '../elements/CyberBox';
import { MenuItem } from '../elements/MenuItem';

export const Menu = ({ setCurrentScreen, theme, setTheme }: any) => {
  const toggleTheme = () => {
    if (theme === 'yellow') setTheme('dark');
    else if (theme === 'dark') setTheme('white');
    else setTheme('yellow');
  };

  const getThemeIcon = () => {
    if (theme === 'yellow') return Zap;
    if (theme === 'dark') return Moon;
    return Sun;
  };

  const getThemeName = () => {
    if (theme === 'yellow') return 'Cyber Yellow';
    if (theme === 'dark') return 'Dark Mode';
    return 'Light Mode';
  };

  return (
    <motion.div
      key="menu"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="absolute inset-0 flex flex-col p-6 z-30 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center mt-6 mb-12">
        <CyberBox className="w-12 h-12" onClick={() => setCurrentScreen('home')} innerClassName="flex items-center justify-center">
          <ArrowLeft className="w-6 h-6" />
        </CyberBox>
        <h2 className="font-orbitron font-bold text-2xl ml-4">SYSTEM MENU</h2>
      </div>
      
      <div className="flex-1">
        <MenuItem icon={getThemeIcon()} title={`Theme: ${getThemeName()}`} onClick={toggleTheme} />
        <MenuItem icon={Info} title="About" onClick={() => setCurrentScreen('about')} />
        <MenuItem icon={Shield} title="Privacy Policy" onClick={() => setCurrentScreen('privacy')} />
        <MenuItem icon={FileText} title="Terms of Service" onClick={() => setCurrentScreen('terms')} />
        <MenuItem icon={LogOut} title="Disconnect" onClick={() => setCurrentScreen('login')} />
      </div>

      <div className="mt-auto mb-8 text-center opacity-50 font-bold text-sm">
        v1.0.0 // CYBER_VPN_CORE
      </div>
    </motion.div>
  );
};
