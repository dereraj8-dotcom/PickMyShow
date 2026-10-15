
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-about">
                    <a href="/" className="footer-logo">
                        Pick<span>MyShow</span>
                    </a>

                    <p>
                        Your destination for booking movie
                        tickets. Discover movies, find theatres,
                        and enjoy the big-screen experience.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/movies">Movies</a>
                    <a href="/theatres">Theatres</a>
                    <a href="/offers">Offers</a>
                </div>

                <div className="footer-links">
                    <h3>Support</h3>
                    <a href="/contact">Contact Us</a>
                    <a href="/about">About Us</a>
                    <a href="/faq">FAQs</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>

                <div className="footer-contact">
                    <h3>Get in Touch</h3>
                    <p>Email: support@pickmyshow.com</p>
                    <p>Enjoy movies. Create memories.</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} PickMyShow.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
