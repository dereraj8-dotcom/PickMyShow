
import { Link } from "react-router";
import "./Welcome.css";

function Welcome() {
    return (
        <div className="welcome-page">

            <nav className="welcome-navbar">

                <Link to="/Welcome" className="welcome-logo">
                    PICKMY<span>SHOW</span>.
                </Link>

                <div className="welcome-auth">
                    <Link to="/Login" className="welcome-login">
                        Login
                    </Link>

                    <Link to="/Signup" className="welcome-signup">
                        Sign Up
                    </Link>
                </div>

            </nav>

            <section className="welcome-hero">

                <div className="welcome-content">

                    <span className="welcome-tag">
                        YOUR ENTERTAINMENT DESTINATION
                    </span>

                    <h1>
                        Your Show,
                        <br />
                        <span>Your Experience.</span>
                    </h1>

                    <p>
                        Discover blockbuster movies, explore exciting
                        events and book your favourite shows.
                        Your next unforgettable experience starts here.
                    </p>

                    <div className="welcome-buttons">

                        <Link to="/" className="welcome-btn">
                            Explore Now
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                    <div className="welcome-bottom-text">
                        <i className="bi bi-film"></i>
                        Movies &nbsp; • &nbsp; Events &nbsp; • &nbsp; Entertainment
                    </div>

                </div>

                <div className="welcome-scroll">
                    <i className="bi bi-chevron-down"></i>
                </div>

            </section>

        </div>
    );
}

export default Welcome;
