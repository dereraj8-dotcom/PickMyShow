import  './NavBar.css';
import { Link } from "react-router";
function NavBar({onLinkclick}){
    return(
    <>
   <nav className="navbar">
        <a href="/" className="logo">Pick<span>MyShow</span></a>

        <ul className="nav-links">
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