import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sm:w-3/4 text-right flex flex-row-reverse items-center">
      <ul className="inline-block">
        <li>
          <a href={`${import.meta.env.VITE_HOME_URL}/`}>Inicio</a>
        </li>
        <li>
          <NavLink to="/" className="font-semibold">I Jornada</NavLink>
        </li>
        <li>
          <NavLink to="/workshops/">Talleres</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
