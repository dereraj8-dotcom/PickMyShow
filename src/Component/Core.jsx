
import "./Core.css";
import Movies from './Movies';
import Theatres from './Theatres';
import Offers from './Offers';

function Core({currentPage}) {
    return (
        <>
        {currentPage === "default" && (<h1>Under Construction</h1>)}
        {currentPage === "Movies" && (<Movies/>)}
        {currentPage === "Theatres" && (<Theatres/>)}
        {currentPage === "Offers" && (<Offers/>)}
        {/* <main className="construction-main">
            <div className="construction-content">

                <div className="construction-icon">
                    🎬
                </div>

                <p className="construction-label">
                    SOMETHING EXCITING IS COMING
                </p>

                <h1>
                    We're <span>Coming Soon!</span>
                </h1>

                <p className="construction-description">
                    We're working hard to bring you an amazing
                    movie ticket booking experience.
                    Discover movies, explore theatres, and book
                    your favourite seats with PickMyShow.
                </p>

                <div className="construction-badge">
                    <span className="status-dot"></span>
                    Website Under Construction
                </div>

                <a href="/" className="construction-btn">
                    Back to Home
                </a>

            </div>
        </main> */}
        </>
    );
}

export default Core;
