import{ useState } from 'react';
import { motion } from 'motion/react';
import { User, Lock, LogIn } from 'lucide-react';
import { CyberBox } from '../elements/CyberBox';
import { CyberInput } from '../elements/CyberInput';

export const Login = ({ setCurrentScreen }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Simulate login
    // setCurrentScreen('home');
  };

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex flex-col p-6 z-20 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 max-w-sm mx-auto w-full">
        <div className="mb-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-secondary text-primary flex items-center justify-center rounded-full mb-6 cyber-shadow border-4 border-primary">
            <Lock className="w-10 h-10" />
          </div>
          <h1 className="font-orbitron font-black text-4xl tracking-widest uppercase text-center">System<br/>Login</h1>
          <div className="w-16 h-1 bg-accent mt-6"></div>
        </div>

        <form onSubmit={handleLogin} className="w-full">
          <CyberInput icon={User} placeholder="OPERATOR ID" value={username} onChange={(e: any) => setUsername(e.target.value)} />
          <CyberInput icon={Lock} type="password" placeholder="ACCESS CODE" value={password} onChange={(e: any) => setPassword(e.target.value)} />

          <div className="mt-8">
            <CyberBox inverted className="w-full h-16" innerClassName="flex items-center justify-center gap-3" onClick={handleLogin}>
              <LogIn className="w-6 h-6 text-primary" />
              <span className="font-orbitron font-bold text-lg tracking-widest text-primary uppercase">Authenticate</span>
            </CyberBox>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="font-bold text-sm opacity-70 mb-2">NO CREDENTIALS?</p>
          <button onClick={() => setCurrentScreen('register')} className="font-orbitron font-bold text-accent uppercase tracking-wider hover:underline text-lg">
            Request Access
          </button>
        </div>
      </div>
    </motion.div>
  );
};
