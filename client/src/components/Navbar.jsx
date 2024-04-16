import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartShopping,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Navbar({ onLoginClick }) {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const dropdownRef = useRef(null);

  
  
  useEffect(() => {
    
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    
    
  }, [activeMenu]);
  
  
  
  
  const handleDashboardClick = () => {
    navigate('/user/add-product');
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
       window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);


  function handleDropdownMenu() {
    setActiveMenu(!activeMenu);
  }

  const handleActiveClassName = ({ isActive }) =>
    '' + (isActive ? 'active' : '');

  return (
    <nav>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className={`navbar-top navbar ${showNavbar ? 'show' : 'hide'}`}
      >
        {/* <div className="navbar-top"> */}
        <Link to="/">
          <div className="logo" onClick={() => setActiveMenu(false)}>
            <img src="/logo1.jpg" alt="" />
          </div>
        </Link>
        <div className="nav-right">
          <NavLink to="/" className={handleActiveClassName}>
            Home
          </NavLink>
          <NavLink to="/shop" className={handleActiveClassName}>
            Shop
          </NavLink>
          <NavLink to="/docs" className={handleActiveClassName}>
            Docs
          </NavLink>
          <NavLink to="/apps" className={handleActiveClassName}>
            App store
          </NavLink>
          <NavLink to="/cart" className="navbar-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <NavLink to="/user/add-product" className="navbar-icon">
            <FontAwesomeIcon
              icon={faUserNinja}
              onClick={handleDashboardClick}
            />
          </NavLink>
          <Link href="#" onClick={onLoginClick}>
            <span className="nav-login-btn">Login</span>
          </Link>
        </div>
        <div className="mobile-nav-right">
          <NavLink
            to="/cart"
            className="navbar-icon"
            onClick={() => setActiveMenu(false)}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <button onClick={handleDropdownMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </motion.div>

      <div className="overlay" 
      onClick={() => setActiveMenu(false)}
      ></div>
      {activeMenu && (
        <motion.div
        ref={dropdownRef}
        initial={{ x: 50 }}
        animate={{ x: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileInView={{ opacity: 1, x: 50 }}
        className="dropdown-menu"
        >
          <div className="logo">
            <img src="/logo1.jpg" alt="" />
          </div>
          <NavLink onClick={handleDropdownMenu} to="/shop">
            SHOP
          </NavLink>
          <NavLink onClick={handleDropdownMenu} to="/docs">
            DOCS
          </NavLink>
          <NavLink onClick={handleDropdownMenu} to="/apps">
            APPSTORE
          </NavLink>
          <NavLink onClick={handleDropdownMenu} to="/user/add-product">
            ACCOUNT
          </NavLink>
          <NavLink href="#" onClick={onLoginClick}>
            LOGIN
          </NavLink>
        </motion.div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Navbar;
