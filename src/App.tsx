// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { useState } from "react"
import { Login } from "./core/pages/Login"

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <>
      <section id="center" className="relative w-full h-full overflow-hidden">
        {currentScreen === 'login' && <Login setCurrentScreen={setCurrentScreen}/>}
      
      </section>

  
     
    </>
  )
}

export default App
