import { NavLink } from "react-router-dom";
import "../styles/navbar.css" 

function Navbar() {
  return (
    <nav >
      <NavLink to="/">
        <h1 className="Logo">2kin</h1>
      </NavLink>
      <div className="nav-right">
      <NavLink>SHOP</NavLink>
      <NavLink>DOCS</NavLink>
      <NavLink to={"/apps"}>APPSTORE</NavLink>
      </div>
      
    </nav>
  );
}
export default Navbar;