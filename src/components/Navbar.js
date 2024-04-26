import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/ms.png";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="left-side">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="right-side">
        <Link
          to="/movielist"
          className={location.pathname === "/movielist" ? "active" : ""}
        >
          Movies
        </Link>
        <Link
          to="/animelist"
          className={location.pathname === "/animelist" ? "active" : ""}
        >
          Anime
        </Link>
        <Link
          to="/serieslist"
          className={location.pathname === "/serieslist" ? "active" : ""}
        >
          TV Series
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
