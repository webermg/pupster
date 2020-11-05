import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Navbar</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/discover" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
          Discover
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/search" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
    </ul>
  </div>
</nav>




    
  )
}
