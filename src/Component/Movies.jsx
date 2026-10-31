
import { useState } from "react";
import "./Movies.css";

const movieData = [
    // NOW SHOWING
    {
        id: 1,
        title: "Inception",
        genre: "Action",
        language: "English",
        rating: "8.8",
        status: "now",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
        id: 2,
        title: "Interstellar",
        genre: "Drama",
        language: "English",
        rating: "8.7",
        status: "now",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBv1.jpg"
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        language: "English",
        rating: "9.0",
        status: "now",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        id: 4,
        title: "3 Idiots",
        genre: "Comedy",
        language: "Hindi",
        rating: "8.4",
        status: "now",
        image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg"
    },
    {
        id: 5,
        title: "Titanic",
        genre: "Romance",
        language: "English",
        rating: "7.9",
        status: "now",
        image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    },
    {
        id: 6,
        title: "Dune",
        genre: "Adventure",
        language: "English",
        rating: "8.0",
        status: "now",
        image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    },

    // UPCOMING MOVIES - SAMPLE ENTRIES
    {
        id: 7,
        title: "Avatar: The Way of Water",
        genre: "Adventure",
        language: "English",
        rating: "7.5",
        status: "upcoming",
        image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    },
    {
        id: 8,
        title: "Spider-Man: No Way Home",
        genre: "Action",
        language: "English",
        rating: "8.2",
        status: "upcoming",
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },
    {
        id: 9,
        title: "Oppenheimer",
        genre: "Drama",
        language: "English",
        rating: "8.3",
        status: "upcoming",
        image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
    },
    {
        id: 10,
        title: "The Conjuring",
        genre: "Horror",
        language: "English",
        rating: "7.5",
        status: "upcoming",
        image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
    }
];

const genres = [
    "All",
    "Action",
    "Comedy",
    "Drama",
    "Romance",
    "Horror",
    "Adventure"
];

function Movies() {

    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");

    const filteredMovies = movieData.filter((movie) => {

        const matchSearch = movie.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchGenre =
            selectedGenre === "All" ||
            movie.genre === selectedGenre;

        return matchSearch && matchGenre;
    });

    const nowShowing = filteredMovies.filter(
        (movie) => movie.status === "now"
    );

    const upcomingMovies = filteredMovies.filter(
        (movie) => movie.status === "upcoming"
    );

    const bookMovie = (title) => {
        alert(`You selected ${title}. Booking page coming soon!`);
    };

    const MovieCard = ({ movie, upcoming = false }) => (
        <div className="movie-card">

            <div className="movie-image">
                <img
                    src={movie.image}
                    alt={movie.title}
                    onError={(e) => {
                        e.currentTarget.src =
                            `https://placehold.co/400x600/241b35/ffffff?text=${encodeURIComponent(movie.title)}`;
                    }}
                />

                <span className="movie-rating">
                    ★ {movie.rating}
                </span>

                {upcoming && (
                    <span className="upcoming-label">
                        Coming Soon
                    </span>
                )}
            </div>

            <div className="movie-info">

                <h3>{movie.title}</h3>

                <p>{movie.genre} • {movie.language}</p>

                <button
                    className="movie-book-btn"
                    onClick={() => bookMovie(movie.title)}
                >
                    {upcoming ? "View Details" : "Book Now"}
                </button>

            </div>

        </div>
    );

    return (
        <div className="movies-page">

            {/* Page Heading */}

            <section className="movies-hero">

                <span>WELCOME TO PICKMYSHOW</span>

                <h1>Discover Your Next Favourite Movie</h1>

                <p>
                    Explore the latest blockbusters, exciting dramas
                    and upcoming movies. Find your show and book your tickets!
                </p>

            </section>


            {/* Search Section */}

            <section className="movie-filter-section">

                <div className="movie-search-box">

                    <input
                        type="text"
                        placeholder="Search your favourite movie..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <span>🔍</span>

                </div>


                {/* Genre Filter */}

                <div className="genre-section">

                    <h3>Browse By Genre</h3>

                    <div className="genre-buttons">

                        {genres.map((genre) => (

                            <button
                                key={genre}
                                className={
                                    selectedGenre === genre
                                        ? "genre-btn selected"
                                        : "genre-btn"
                                }
                                onClick={() => setSelectedGenre(genre)}
                            >
                                {genre}
                            </button>

                        ))}

                    </div>

                </div>

            </section>


            {/* Now Showing */}

            <section className="movie-list-section">

                <div className="movie-section-heading">

                    <div>
                        <span>WATCH IT NOW</span>
                        <h2>Now Showing</h2>
                    </div>

                    <p>{nowShowing.length} Movies</p>

                </div>


                <div className="movie-grid">

                    {nowShowing.length > 0 ? (

                        nowShowing.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))

                    ) : (

                        <p className="no-movies">
                            No movies found!
                        </p>

                    )}

                </div>

            </section>


            {/* Upcoming Movies */}

            <section className="movie-list-section upcoming-section">

                <div className="movie-section-heading">

                    <div>
                        <span>COMING SOON</span>
                        <h2>Upcoming Movies</h2>
                    </div>

                    <p>{upcomingMovies.length} Movies</p>

                </div>


                <div className="movie-grid">

                    {upcomingMovies.length > 0 ? (

                        upcomingMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                upcoming={true}
                            />
                        ))

                    ) : (

                        <p className="no-movies">
                            No upcoming movies found!
                        </p>

                    )}

                </div>

            </section>

        </div>
    );
}

export default Movies;
