import  './NavBar.css';
import { Link } from "react-router-dom";
import {UserContext} from './UserProvider';
import { useContext } from 'react';
function NavBar({onLinkclick}){
    const {user} =useContext(UserContext);
    // const userDetail = (null);                                     ERRORBOUNDARY
    return(
    <>
   <nav className="navbar">
        <a href="/" className="logo">Pick<span>MyShow</span></a>

        <ul className="nav-links">
            <li>{user.username}</li> 
            {/* <li> {userDetail.name}</li>                           ERRORBOUNDARY */}
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Movies">Movies</Link></li>
            <li><Link to ="/Theatres" >Theatres</Link></li>
            <li><Link to ="/Offers" >Offers</Link></li>
            <li><Link to ="/Contact">Contact</Link></li>
        </ul>

        <div className="nav-buttons">
            <Link to ="/Login" className="login-btn">Login</Link>
            <Link to ="/Signup" className="Signup-btn">Signup</Link>
        </div>
    </nav>
    </>
    );
}

export default NavBar;