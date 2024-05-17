import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import darkLogo from '../../assets/initialLogoBlack.png';
import lightLogo from '../../assets/initialLogo.png';
import './Header.scss';
import HeaderLink from '../HeaderLink/HeaderLink';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const isDarkMode = location.pathname !== '/';

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    document.querySelector('.header__dropdown-btn').classList.toggle('rotate');
  };

  const closeDropdown = (e) => {
    if (!e.target.matches('.header__dropdown-btn')) {
      setShowDropdown(false);
      document.querySelector('.header__dropdown-btn').classList.remove('rotate');
    }
  };

  window.onclick = closeDropdown;

  return (
    <>

    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      
      <nav className="header__nav">
        <Link className="header__logo-link" to="/">
          <img
            className="header__logo"
            src={isDarkMode ? lightLogo : darkLogo}
            alt="Logo"
          />
        </Link>

        <nav className={`header__subnav ${isDarkMode ? 'dark-mode' : ''}`}>
          <button className={`header__dropdown-btn ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleDropdown}>
            ≡
          </button>
          <div className={`header__dropdown-content ${showDropdown ? 'show' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <HeaderLink to="/" text="Home" isDarkMode={isDarkMode} />
            <HeaderLink to="/about" text="About" isDarkMode={isDarkMode} />
            <HeaderLink to="/fullstack" text="Web Dev" isDarkMode={isDarkMode} />
            <HeaderLink to="/gamedev" text="Game Dev" isDarkMode={isDarkMode} />
            <HeaderLink to="/about#contact" text="Contact" isDarkMode={isDarkMode} />
          </div>
        </nav>
      </nav>
      
    </header>
    </>
  );
}

export default Header;
