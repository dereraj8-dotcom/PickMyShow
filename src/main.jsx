import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from './Component/HelloWorld.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import NavBar from './Component/NavBar.jsx';
// import Core from './Component/Core.jsx';
// import Footer from './Component/Footer.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> 
     {/* <HelloWorld/> */}
     {/* <NavBar/>
      <Core/>
      <Footer/> */}
      
     
     
  </StrictMode>,
)
