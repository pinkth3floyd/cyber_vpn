
import { motion } from 'motion/react';
import { Menu as MenuIcon, Crown, ChevronRight, ArrowDown, ArrowUp, ShieldCheck } from 'lucide-react';
import { CyberBox } from '../elements/CyberBox';
import { PowerButton } from '../elements/PowerButton';
// import { formatTime } from '../../utils/formatTime';
import { formatTime } from '../utils/FormatTime';

export const Home = ({ time, isConnected, setIsConnected, setCurrentScreen }: any) => (
  <motion.div
    key="home"
    initial={{ x: -300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="absolute inset-0 flex flex-col p-6 z-10 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
  >
    <div className="flex justify-between items-center mt-6">
      <CyberBox className="w-12 h-12" innerClassName="flex items-center justify-center" onClick={() => setCurrentScreen('menu')}>
        <MenuIcon className="w-6 h-6" />
      </CyberBox>
      <CyberBox className="w-12 h-12" innerClassName="flex items-center justify-center" onClick={() => setCurrentScreen('premium')}>
        <Crown className="w-6 h-6" />
      </CyberBox>
    </div>

    <div className="mt-8 flex flex-col items-center relative">
      <div className="absolute top-0 left-4 w-4 h-4 border-t-2 border-l-2 border-secondary" />
      <div className="absolute bottom-0 right-4 w-4 h-4 border-b-2 border-r-2 border-secondary" />
      
      <h1 className="font-orbitron font-black italic text-4xl tracking-tighter mt-2">CYBER VPN</h1>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-2 h-2 bg-secondary rotate-45" />
        <span className="font-bold uppercase tracking-widest text-sm">Connection Time:</span>
        <div className="w-2 h-2 bg-secondary rotate-45" />
      </div>

      <CyberBox inverted className="w-full mt-4 h-20 mb-4" innerClassName="flex items-center justify-center">
        <span className="font-orbitron font-bold text-5xl tracking-widest text-primary">
          {formatTime(time)}
        </span>
      </CyberBox>
    </div>

    <div className="mt-4" onClick={() => setCurrentScreen('locations')}>
      <CyberBox className="w-full">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center text-2xl bg-white shadow-[2px_2px_0px_var(--fg-primary)]">
              🇺🇸
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">United States</div>
              <div className="text-xs font-semibold">IP 37.120.202.186</div>
            </div>
          </div>
          <ChevronRight className="w-6 h-6" />
        </div>
      </CyberBox>
    </div>

    <div className="flex w-full gap-4 mt-6">
      <CyberBox altClip className="flex-1 h-16" innerClassName="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-sm font-bold">
          <ArrowDown className="w-4 h-4" /> 245 kb/s
        </div>
        <div className="text-[10px] uppercase tracking-wider font-bold">Download</div>
      </CyberBox>
      <CyberBox inverted className="flex-1 h-16" innerClassName="flex flex-col items-center justify-center">
        <div className="text-[10px] uppercase tracking-wider font-bold text-primary">Upload</div>
        <div className="flex items-center gap-2 text-sm font-bold text-primary">
          <ArrowUp className="w-4 h-4" /> 176 kb/s
        </div>
      </CyberBox>
    </div>

    <div className="mt-8 flex flex-col items-center flex-1 justify-center">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck className="w-5 h-5" />
        <span className="font-bold uppercase tracking-widest">{isConnected ? 'Connected' : 'Disconnected'}</span>
      </div>
      <PowerButton isConnected={isConnected} toggleConnection={() => setIsConnected(!isConnected)} />
    </div>
  </motion.div>
);
