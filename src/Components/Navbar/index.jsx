import "./Navbar.css"
import { NavLink } from "react-router-dom"
import Cookies from "universal-cookie"

const cookies = new Cookies();

const showLoginForm = () => {
  const loginForm = document.getElementById("loginform-container");
  loginForm.classList.remove("hidden");
  
  const loginFormFields = document.getElementsByClassName("loginform-field");
  for (let element of loginFormFields) {
    element.classList.remove("hidden");
  }

  const recoveryFormFields = document.getElementsByClassName("recoveryform");
  for (let element of recoveryFormFields) {
    element.classList.add("hidden");
  }
};

const startSession = () => {
  const name = cookies.get("name")
  const lastname = cookies.get("lastname")

  if(name && lastname) {
    return (<NavLink to="/profile">{name} {lastname}</NavLink>)
  } else {
    return (<a onClick={showLoginForm} className="cursor-pointer" id="login">Iniciar sesión</a>)
  }
}

const Navbar = () => {
  return (
    <nav className="sm:w-3/4 text-right flex flex-row-reverse items-center">
      <ul className="inline-block">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/workshops/">Talleres</NavLink>
        </li>
        <li>
          <NavLink to="/resources/">Recursos</NavLink>
        </li>
        <li>{startSession()}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
