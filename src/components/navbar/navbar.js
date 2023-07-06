import React, { useState } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="line line_1"></span>
        <span className="line line_2"></span>
        <span className="line line_3"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item text-center">
            <Link to="/" className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/BookRecommendationAI" className="nav-link" href="/">
              Books
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/TravelingPlannerAI" className="nav-link" href="/">
              Traveling
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/GamingSuggestorAI" className="nav-link" href="/">
              Gaming
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
