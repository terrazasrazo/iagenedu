import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sm:w-3/4 text-right flex flex-row-reverse items-center">
      <ul className="inline-block">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <NavLink to="/i-jornada/" className="font-semibold">I Jornada</NavLink>
        </li>
        <li>
          <NavLink to="/i-jornada/workshops/">Talleres</NavLink>
        </li>
        <li>
          <a href="/resources/">Recursos</a>
        </li>
        <li>
          <a href="/recomendaciones/" className="text-orange_unam font-semibold">Recomendaciones</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
