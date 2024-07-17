import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import Search from '../components/Search';
import Button from '../components/Button';
import SearchResultList from '../components/SearchResultList';

function Header({ scroll, handleSlideChange }) {
  const [results, setResults] = useState([]);
  const [navList, setNavList] = useState(navListData);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOnClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });

    setNavList(newNavList);
    setIsNavOpen(false); // Close the nav when an item is clicked
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const clearResults = () => {
    setResults([]);
  };

  const handleSignInClick = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={`${scroll > 100 ? 'scrolled' : ''}`}>
      <Link to="/" className="logo">
        Streamer
      </Link>
      
      <ul className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        {navList.map(nav => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
        <div className="showin">
        <Link to="/signin" onClick={handleSignInClick}>
          <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign in" />
        </Link>
        </div>
      </ul>
      <div className="header-actions">
        <Search setResults={setResults} clearResults={clearResults} />
        <SearchResultList results={results} slideChange={handleSlideChange} clearResults={clearResults} />
      </div>
      <div className="show">
        <Link to="/signin" onClick={handleSignInClick}>
          <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign in" />
        </Link>
      </div>

      <button className="nav-toggle" onClick={toggleNav}>
        <span className="hamburger"></span>
      </button>
    </header>
  );
}

export default Header;
