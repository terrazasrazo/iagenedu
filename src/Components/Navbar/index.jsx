import "./Navbar.css"
import { NavLink } from "react-router-dom"
import Cookies from "universal-cookie"

const cookies = new Cookies();

const showLoginForm = () => {
  const loginForm = document.getElementById("loginform-container");
  loginForm.classList.remove("hidden");
};

const startSession = () => {
  const name = cookies.get("name")
  const lastname = cookies.get("lastname")

  if(name && lastname) {
    return (<NavLink to="/profile">{name} {lastname}</NavLink>)
  } else {
    return (<a onClick={showLoginForm}>Iniciar sesión</a>)
  }
}

const Navbar = () => {
  return (
    <nav className="w-1/2 text-right">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/call-for/">Convocatoria</NavLink>
        </li>
        <li>
          <NavLink to="/workshops/">Talleres</NavLink>
        </li>
        <li>{startSession()}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
