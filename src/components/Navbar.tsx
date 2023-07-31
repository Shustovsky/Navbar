import './Navbar.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <a href="/">
        <h1 className="logo">Logo</h1>
      </a>
      <div
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div
        className={isMobile ? 'burger-icon active' : 'burger-icon'}
        onClick={() => setIsMobile((prevState) => !prevState)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
