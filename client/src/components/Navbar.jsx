import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Navbar({ onLoginClick }) {
  const [activeMenu, setActiveMenu] = useState(false);
  
  function handleDropdownMenu() {
    if (activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }



  return (
    <nav>
    <div className="navbar-top">
      <NavLink to="/">
        <h1 className="Logo">2kin</h1>
      </NavLink>
      <div className="nav-right">
        <NavLink to={"/shop"}>SHOP</NavLink>
        <NavLink to="/docs">DOCS</NavLink>
        <NavLink to={"/apps"}>APPSTORE</NavLink>
        <NavLink to={"/cart"}>CART</NavLink>
        <Link href="#" onClick={onLoginClick}>
          <span className="nav-login-btn">Login</span>
        </Link>
      </div>
      <button onClick={() => handleDropdownMenu()}>hamburger</button>
      </div>
      {activeMenu ? (
        <>
          <div className="dropdown-menu">
            <NavLink  onClick={() => handleDropdownMenu()}
             to={"/shop"}>SHOP</NavLink>
            <NavLink  onClick={() => handleDropdownMenu()}
            to="/docs">DOCS</NavLink>
            <NavLink  onClick={() => handleDropdownMenu()}
            to={"/apps"}>APPSTORE</NavLink>
            <NavLink  onClick={() => handleDropdownMenu()}
            to={"/cart"}>CART</NavLink>
            <NavLink href="#" onClick={onLoginClick}>
              LOGIN
            </NavLink>
          </div>
        </>
      ) : null}
    </nav>
  );
}

Navbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Navbar;
