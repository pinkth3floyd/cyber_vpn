// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { useState } from "react"
import { Login } from "./core/pages/Login"
import { Register } from "./core/pages/Register";
import { Home } from "./core/pages/Home";

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <>
      <section id="center" className="relative w-full h-full overflow-hidden">
        {/* {currentScreen === 'login' && <Login setCurrentScreen={setCurrentScreen}/>} */}
        {/* <Register/> */}
        {/* <Home/> */}
      
      </section>

  
     
    </>
  )
}

export default App
