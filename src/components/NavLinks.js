import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <button
          className="dropdown-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="closeMenu" />
          ) : (
            <FaBars className="openMenu" />
          )}
        </button>
        <nav className={`links ${isMenuOpen ? 'open' : 'closed'}`}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavLinks;
