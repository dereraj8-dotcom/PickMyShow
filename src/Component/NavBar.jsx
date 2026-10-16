import  './NavBar.css';
import { Link } from "react-router";
function NavBar({onLinkclick}){
    return(
    <>
   <nav class="navbar">
        <a href="/" class="logo">Pick<span>MyShow</span></a>

        <ul class="nav-links">
            <li><Link to ="/">Home</Link></li>
            <li><a href="Movies" onClick={(e)=>{e.preventDefault();onLinkclick("Movies")}}>Movies</a></li>
            <li><a href="/Theatres" onClick={(e)=>{e.preventDefault();onLinkclick("Theatres")}}>Theatres</a></li>
            <li><a href="/Offers" onClick={(e)=>{e.preventDefault();onLinkclick("Offers")}}>Offers</a></li>
            <li><Link to ="/Contact">Contact</Link></li>
        </ul>

        <div class="nav-buttons">
            <Link href="" class="login">Login</Link>
            <Link href="" class="register">Register</Link>
        </div>
    </nav>
    </>
    );
}

export default NavBar;