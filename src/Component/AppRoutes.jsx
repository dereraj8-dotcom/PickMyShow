import {Routes , Route } from 'react-router';
import Home from "./Home";
import Contact from "./Contact";
import Movies from './Movies';
import Theatres from './Theatres';
import Offers from './Offers';
import Signup from './Signup';
import Login from './Login';
import OTPVerify from './OTPVerify';
function AppRoutes(){
    return(
        <>
        <Routes>
        <Route  path = "/" element ={<Home/>} > </Route>
        <Route path = "/Contact"  element ={<Contact/>}></Route>
         <Route path = "/Movies"  element ={<Movies/>}></Route>
          <Route path = "/Theatres"  element ={<Theatres/>}></Route>
           <Route path = "/Offers"  element ={<Offers/>}></Route>
            <Route path = "/Signup"  element ={<Signup/>}></Route>
             <Route path = "/Login"  element ={<Login/>}></Route>
              <Route path = "/OTPVerify"  element ={<OTPVerify/>}></Route>
             
        </Routes>
        </>
    )
}

export default AppRoutes;
