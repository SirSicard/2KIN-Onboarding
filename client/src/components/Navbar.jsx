import { NavLink } from "react-router-dom";
import "../styles/navbar.css" 

function Navbar() {
  return (
    <nav >
      <NavLink to="/">
        <h1 className="Logo">2kin</h1>
      </NavLink>
      <div className="nav-right">
      <NavLink to={"/shop"}>SHOP</NavLink>
      <NavLink to="/docs">DOCS</NavLink>
      <NavLink>APPSTORE</NavLink>
      </div>
      
    </nav>
  );
}
export default Navbar;