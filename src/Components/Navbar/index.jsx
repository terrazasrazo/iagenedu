import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-1/2 text-right">
      <ul>
        <li>
          <NavLink to="/iagenedu/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/iagenedu/workshops/">Talleres</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
