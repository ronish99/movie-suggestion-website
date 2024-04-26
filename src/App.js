import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../src/assets/css/App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import logo from "../src/assets/images/ms.png";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };

  return (
    <div>
      <Router>
        <Navbar />
        <AppRouter />
        <div className="footer" onClick={scrollToTop}>
          <div>
            <Link to="/">
              {" "}
              {/* Link to the current page */}
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <p>Copyright © 2024 Movie Suggets.to. All Rights Reserved</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
