import {Routes , Route } from 'react-router';
import Home from "./Home";
import Contact from "./Contact";
function AppRoutes(){
    return(
        <>
        <Routes>
        <Route  path = "/" element ={<Home/>} > </Route>
        <Route path = "/Contact"  element ={<Contact/>}></Route>
        </Routes>
        </>
    )
}

export default AppRoutes;
