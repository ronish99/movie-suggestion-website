// AnimeList.js
import React, { useState } from "react";
import { animes } from "../dummy";
import { Link } from "react-router-dom";
import "../../assets/css/ListPage.css"; // Import the CSS file

const AnimeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter animes based on search term
  const filteredAnimes = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="media-list-container">
      <h2>Anime List</h2>
      <input
        type="text"
        placeholder="Search anime"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar" // Apply the search-bar class
      />
      <ul className="media-list">
        {filteredAnimes.map((anime) => (
          <li key={anime.id} className="media-item">
            <Link to={`/anime/${anime.id}`} className="media-link">
              <img
                src={anime.imageUrl}
                alt={anime.title}
                className="media-image"
              />
              <p className="media-title">{anime.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
