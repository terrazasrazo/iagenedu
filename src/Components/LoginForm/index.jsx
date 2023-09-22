import { NavLink } from "react-router-dom";
import "./LoginForm.css";

const hideLoginForm = () => {
  const loginForm = document.getElementById("loginform-container");
  loginForm.classList.add("hidden");
};

function LoginForm() {
  return (
    <>
      <div
        id="loginform-container"
        className="flex flex-row justify-center items-center hidden"
      >
        <div className="loginform-form">
          <span
            className="absolute top-2 right-2 p-2 cursor-pointer text-gray-500"
            onClick={hideLoginForm}
          >
            X
          </span>
          <img
            src="/images/iagen-icon.svg"
            width="120"
            alt=""
            className="mx-auto"
          />
          <form>
            <div>
              <label htmlFor="username">usuario</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">contraseña</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="text-right py-2">
              <input type="submit" value="iniciar sesión" />
            </div>
          </form>
          <div>
            <p className="text-sm">¿Aún no tienes cuenta? <NavLink
            to="/iagenedu/register"
            className={"text-gray-600 underline"}
          >
            Registrate aquí
          </NavLink></p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default LoginForm;
