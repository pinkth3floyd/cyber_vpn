import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Lock, Mail, UserPlus, ArrowLeft } from 'lucide-react';
import { CyberBox } from '../elements/CyberBox';
import { CyberInput } from '../elements/CyberInput';

export const Register = ({ setCurrentScreen }: any) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: any) => {
    e.preventDefault();
    // Simulate registration
    setCurrentScreen('home');
  };

  return (
    <motion.div
      key="register"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="absolute inset-0 flex flex-col p-6 z-20 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center mt-6 mb-8 relative z-10">
        <CyberBox className="w-12 h-12" onClick={() => setCurrentScreen('login')} innerClassName="flex items-center justify-center">
          <ArrowLeft className="w-6 h-6" />
        </CyberBox>
        <h2 className="font-orbitron font-bold text-2xl ml-4 uppercase">New Operator</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center relative z-10 max-w-sm mx-auto w-full pb-12">
        <form onSubmit={handleRegister} className="w-full">
          <CyberInput icon={Mail} type="email" placeholder="SECURE EMAIL" value={email} onChange={(e: any) => setEmail(e.target.value)} />
          <CyberInput icon={User} placeholder="CHOOSE OPERATOR ID" value={username} onChange={(e: any) => setUsername(e.target.value)} />
          <CyberInput icon={Lock} type="password" placeholder="NEW ACCESS CODE" value={password} onChange={(e: any) => setPassword(e.target.value)} />

          <div className="mt-8">
            <CyberBox inverted className="w-full h-16" innerClassName="flex items-center justify-center gap-3" onClick={handleRegister}>
              <UserPlus className="w-6 h-6 text-primary" />
              <span className="font-orbitron font-bold text-lg tracking-widest text-primary uppercase">Initialize</span>
            </CyberBox>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
