import  './NavBar.css';
function NavBar({onLinkclick}){
    return(
    <>
   <nav class="navbar">
        <a href="/" class="logo">Pick<span>MyShow</span></a>

        <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="Movies" onClick={(e)=>{e.preventDefault();onLinkclick("Movies")}}>Movies</a></li>
            <li><a href="/Theatres" onClick={(e)=>{e.preventDefault();onLinkclick("Theatres")}}>Theatres</a></li>
            <li><a href="/Offers" onClick={(e)=>{e.preventDefault();onLinkclick("Offers")}}>Offers</a></li>
            <li><a href="/">Contact</a></li>
        </ul>

        <div class="nav-buttons">
            <a href="login.html" class="login">Login</a>
            <a href="register.html" class="register">Register</a>
        </div>
    </nav>
    </>
    );
}

export default NavBar;