import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import "./LoginForm.css";

const cookies = new Cookies();

const hideLoginForm = () => {
  const loginForm = document.getElementById("loginform-container");
  loginForm.classList.add("hidden");
};

const displayLoginMessage = (message) => {
  let loginMessage = document.getElementById("loginform-message");
  loginMessage.getElementsByTagName("p")[0].textContent = "";
  loginMessage.getElementsByTagName("p")[0].textContent = message;
  loginMessage.classList.remove("hidden");
  setTimeout(() => {
    loginMessage.classList.add("hidden");
  }, 5000);
};

const sendLogin = () => {
  const emailTag = document.getElementById("username");
  const passwordTag = document.getElementById("password");

  let formData = {
    email: emailTag.value,
    password: passwordTag.value,
  };

  let dataJSON = JSON.stringify(formData);

  let options = {
    method: "POST",
    body: dataJSON,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://ada.bunam.unam.mx/iagen-api/users/login/", options)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        displayLoginMessage(data.error);
        return;
      }
      cookies.set("id", data.id, { path: "/" });
      cookies.set("name", data.name, { path: "/" });
      cookies.set("lastname", data.lastname, { path: "/" });
      cookies.set("email", data.email, { path: "/" });
      cookies.set("worshopsCount", data.worshopsCount, { path: "/" });
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      displayLoginMessage("Ocurrió un error inesperado. Intente más tarde.");
    });
};

const hideFormMessage = () => {
  const formMessage = document.getElementById("loginform-message");
  formMessage.classList.add("hidden");
};

function LoginForm() {
  return (
    <>
      <div
        id="loginform-container"
        className="flex flex-row justify-center items-center hidden"
      >
        <div id="loginform-message" className="hidden">
          <div>
            <span onClick={hideFormMessage}>X</span>
            <p></p>
          </div>
        </div>
        <div className="loginform-form">
          <span onClick={hideLoginForm}>X</span>
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
              <input type="button" onClick={sendLogin} value="iniciar sesión" />
            </div>
          </form>
          <div>
            <p className="text-sm">
              ¿Aún no tienes cuenta?{" "}
              <NavLink to="/register/" className={"text-gray-600 underline"}>
                Registrate aquí
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;