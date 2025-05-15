import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-secondary">
  <div className="container-fluid"> 
    <Link className="navbar-brand" to="/">✈️ FlyMate</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navMenu">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">My Bookings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">SignUp/Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

