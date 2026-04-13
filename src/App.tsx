
import { useEffect, useState } from "react"
import { Login } from "./core/pages/Login"
import { Register } from "./core/pages/Register";
import { Home } from "./core/pages/Home";
import { Splash } from "./core/pages/Splash";
import { Locations } from "./core/pages/Locations";
import { Menu } from "./core/pages/Page";
import { TextPage } from "./core/pages/TextPage";
import { Premium } from "./core/pages/Premium";
import { BackgroundTech } from "./core/elements/BackgroundTech";
import { AnimatePresence } from "motion/react";

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isConnected, setIsConnected] = useState(false);
  const [time, setTime] = useState(0);
  const [theme, setTheme] = useState('yellow');

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('login'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  useEffect(() => {
    let interval: any;
    if (isConnected) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      setTime(0);
    }
    return () => clearInterval(interval);
  }, [isConnected]);


  useEffect(() => {
    // Premium screen forces dark mode temporarily for its own look
    const isPremium = currentScreen === 'premium';
    const activeTheme = isPremium ? 'dark' : theme;
    
    document.body.className = activeTheme === 'dark' ? 'theme-dark' : activeTheme === 'white' ? 'theme-white' : '';
    
    // Get computed colors from CSS variables
    const computedStyle = getComputedStyle(document.body);
    const color = computedStyle.getPropertyValue('--bg-primary').trim() || (activeTheme === 'dark' ? '#111111' : activeTheme === 'white' ? '#ffffff' : '#f4e022');
    const isDark = activeTheme === 'dark';
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    }
    
    // Capacitor native bars configuration (for when converted to mobile app)
    if (typeof window !== 'undefined' && (window as any).Capacitor) {
      const Capacitor = (window as any).Capacitor;
      if (Capacitor.Plugins?.StatusBar) {
        Capacitor.Plugins.StatusBar.setBackgroundColor({ color }).catch(() => {});
        Capacitor.Plugins.StatusBar.setStyle({ style: isDark ? 'DARK' : 'LIGHT' }).catch(() => {});
      }
      if (Capacitor.Plugins?.NavigationBar) {
        Capacitor.Plugins.NavigationBar.setColor({ color, darkButtons: !isDark }).catch(() => {});
      }
    }
  }, [currentScreen, theme]);


  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <Splash />;
      case 'login':
        return <Login setCurrentScreen={setCurrentScreen} />;
      case 'register':
        return <Register setCurrentScreen={setCurrentScreen} />;
      case 'home':
        return <Home time={time} isConnected={isConnected} setIsConnected={setIsConnected} setCurrentScreen={setCurrentScreen} />;
      case 'locations':
        return <Locations setCurrentScreen={setCurrentScreen} />;
      case 'menu':
        return <Menu setCurrentScreen={setCurrentScreen} theme={theme} setTheme={setTheme} />;
      case 'premium':
        return <Premium setCurrentScreen={setCurrentScreen} />;
      case 'about':
        return <TextPage key="about" title="About" onBack={() => setCurrentScreen('menu')} content={`CYBER VPN v1.0.0\n\nDeveloped for the modern netrunner.\n\nCyber VPN provides military-grade encryption and ultra-fast routing through our global network of secure servers.\n\nOur mission is to keep your data safe from corporate surveillance and malicious actors on the net.\n\nStay secure. Stay hidden.`} />;
      case 'privacy':
        return <TextPage key="privacy" title="Privacy Policy" onBack={() => setCurrentScreen('menu')} content={`PRIVACY POLICY\n\n1. ZERO LOGS POLICY\nWe do not track, log, or store your browsing activity, DNS queries, or connection timestamps.\n\n2. DATA COLLECTION\nWe only collect the minimum data required to maintain your account (email, payment info).\n\n3. THIRD PARTIES\nWe never sell your data to third parties or advertisers.\n\n4. SECURITY\nAll data is encrypted using AES-256-GCM cipher with a 4096-bit RSA key.`} />;
      case 'terms':
        return <TextPage key="terms" title="Terms of Service" onBack={() => setCurrentScreen('menu')} content={`TERMS OF SERVICE\n\n1. ACCEPTANCE\nBy using Cyber VPN, you agree to these terms.\n\n2. USAGE\nYou agree not to use our service for illegal activities, spamming, or distributing malware.\n\n3. SUBSCRIPTIONS\nPremium subscriptions are billed monthly. You can cancel at any time.\n\n4. TERMINATION\nWe reserve the right to terminate accounts that violate these terms without refund.`} />;
      default:
        return null;
    }
  };


  return (
    <div className="w-full h-[100dvh] bg-primary overflow-hidden font-rajdhani relative text-secondary">
      <BackgroundTech />
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
    </div>
  );
}

export default App
