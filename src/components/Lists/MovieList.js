import React, { useState } from "react";
import { movies } from "../dummy";
import { Link } from "react-router-dom";
import "../../assets/css/ListPage.css"; // Import the CSS file

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter movies based on search term
  const filteredAnimes = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="media-list-container">
      <h2>Anime List</h2>
      <input
        type="text"
        placeholder="Search movie"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar" // Apply the search-bar class
      />
      <ul className="media-list">
        {filteredAnimes.map((movie) => (
          <li key={movie.id} className="media-item">
            <Link to={`/movie/${movie.id}`} className="media-link">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="media-image"
              />
              <p className="media-title">{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
