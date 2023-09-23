import './Navbar.css';
import { NavLink } from "react-router-dom";

const showLoginForm = () => {
  const loginForm = document.getElementById("loginform-container");
  loginForm.classList.remove("hidden");
};

const Navbar = () => {
  return (
    <nav className="w-1/2 text-right">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/workshops/">Talleres</NavLink>
        </li>
        <li><a onClick={showLoginForm}>Iniciar sesión</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
