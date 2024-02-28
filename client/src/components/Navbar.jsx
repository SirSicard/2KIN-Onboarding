import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import PropTypes from "prop-types";

function Navbar({ onLoginClick }) {
   const navigate = useNavigate();

   const handleDashboardClick = () => {
     navigate('/user/add-product');
   };
  return (
    <nav>
      <NavLink to="/">
        <h1 className="Logo">2kin</h1>
      </NavLink>
      <div className="nav-right">
        <NavLink to={'/shop'}>SHOP</NavLink>
        <NavLink to="/docs">DOCS</NavLink>
        <NavLink to={'/apps'}>APPSTORE</NavLink>
        <button onClick={handleDashboardClick}>DASHBOARD</button>
        <Link href="#" onClick={onLoginClick}>
          <span className="nav-login-btn">Login</span>
        </Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Navbar;
