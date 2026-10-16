import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavBar from './Component/NavBar'
import Core from './Component/Core'
import Footer from './Component/Footer'
import Demo from './Component/Demo';
function App() {
  const [activepage,setActive]=useState("default");
  

  return (
    <>
    <NavBar onLinkclick={setActive}/>
    <Core currentPage={activepage}/>
    <Footer/> 
    <Demo/>
    </>
  )
}

export default App
