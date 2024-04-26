// TVShowList.js
import React, { useState } from "react";
import { TvShows } from "../dummy";
import { Link } from "react-router-dom";
import "../../assets/css/ListPage.css"; // Import the CSS file

const TVShowList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter shows based on search term
  const filteredshows = TvShows.filter((show) =>
    show.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="media-list-container">
      <h2>show List</h2>
      <input
        type="text"
        placeholder="Search show"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar" // Apply the search-bar class
      />
      <ul className="media-list">
        {filteredshows.map((show) => (
          <li key={show.id} className="media-item">
            <Link to={`/show/${show.id}`} className="media-link">
              <img
                src={show.imageUrl}
                alt={show.title}
                className="media-image"
              />
              <p className="media-title">{show.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVShowList;
