import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faUserNinja } from "@fortawesome/free-solid-svg-icons";

function Navbar({ onLoginClick }) {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/user/add-product");
  };

  const [activeMenu, setActiveMenu] = useState(false);

  function handleDropdownMenu() {
    setActiveMenu(!activeMenu);
  }

  return (
    <nav>
      <div className="navbar-top">
        <Link to="/">
          <h1 className="Logo" onClick={() => setActiveMenu(false)}>
            2kin
          </h1>
        </Link>
        <div className="nav-right">
          <NavLink to="/shop" activeClassName="active">SHOP</NavLink>
          <NavLink to="/docs" activeClassName="active">DOCS</NavLink>
          <NavLink to="/apps" activeClassName="active">APPSTORE</NavLink>
          <NavLink to="/cart" className="navbar-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <Link to="/user/add-product" className="navbar-icon">
          <FontAwesomeIcon icon={faUserNinja} onClick={handleDashboardClick}/>
          </Link>
          <Link href="#" onClick={onLoginClick}>
            <span className="nav-login-btn">Login</span>
          </Link>
        </div>
        <div className="mobile-nav-right">
          <NavLink to="/cart" className="navbar-icon" onClick={()=> setActiveMenu(false)}>
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <button onClick={handleDropdownMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      {activeMenu && (
        <div className="dropdown-menu">
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
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Navbar;
