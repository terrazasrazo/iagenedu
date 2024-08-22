import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sm:w-3/4 text-right flex flex-row-reverse items-center">
      <ul className="inline-block">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/i-jornada/" className="font-semibold">I Jornada</NavLink>
        </li>
        <li>
          <NavLink to="/i-jornada/workshops/">Talleres</NavLink>
        </li>
        <li>
          <NavLink to="/resources/">Recursos</NavLink>
        </li>
        <li>
          <NavLink to="/recomendaciones/" className="text-orange_unam font-semibold">Recomendaciones</NavLink>
        </li>
        <li>
          <a href="/docs/recomendaciones_uso_iagen_docencia_unam_2023.pdf" target="_blank" rel="noopener noreferrer"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
