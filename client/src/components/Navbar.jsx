import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import PropTypes from "prop-types";
import {  useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCartShopping} from "@fortawesome/free-solid-svg-icons"
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
        <h1 className="Logo" onClick={() => setActiveMenu(false)}
        >2kin</h1>
      </NavLink>
      <div className="nav-right">
        <NavLink to={"/shop"}>SHOP</NavLink>
        <NavLink to="/docs">DOCS</NavLink>
        <NavLink to={"/apps"}>APPSTORE</NavLink>
        <NavLink to={"/cart"} className={"navbar-cart"}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </NavLink>
        <Link href="#" onClick={onLoginClick}>
          <span className="nav-login-btn">Login</span>
        </Link>
      </div>
       <button  onClick={() => handleDropdownMenu()}>
       <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
       </button>
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
