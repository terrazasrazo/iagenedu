import { NavLink } from "react-router-dom";
import "./LoginForm.css";

const hideLoginForm = () => {
  const loginForm = document.getElementById("loginform-container");
  loginForm.classList.add("hidden");
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

  fetch("https://ada.bunam.unam.mx/iagen-api/users/login", options)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(`Error message ${data.error}`);
        let formMessage = document.getElementById("loginform-message");
        formMessage.getElementsByTagName("p")[0].textContent = data.error;
        formMessage.classList.remove("hidden");
      }
      // console.log(data)
    })
    .catch((error) => {
      console.log(error);
      let formMessage = document.getElementById("loginform-message");
      formMessage.firstElementChild().textContent = error;
      // console.log(formMessage.firstElementChild())
      // console.error(error)
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
