import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavBar from './Component/NavBar'
import Core from './Component/Core'
import Footer from './Component/Footer'
import Demo from './Component/Demo';
import {BrowserRouter} from "react-router-dom";
import UserProvider from './Component/UserProvider';
import ErrorBoundary from './Component/ErrorBoundary';
function App() {
  const [activepage,setActive]=useState("default");
  

  return (
    <>
    <BrowserRouter>
    <ErrorBoundary>
    <UserProvider> 
      
    <NavBar onLinkclick={setActive}/>
    <Core currentPage={activepage}/>
    <Footer/> 
    </UserProvider>
    </ErrorBoundary>
    </BrowserRouter>
    {/* <Demo/> */}
    </>
  )
}

export default App
