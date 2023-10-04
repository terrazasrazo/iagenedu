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

const displayRecoveryForm = () => {
  const loginFormFields = document.getElementsByClassName("loginform-field");
  for (let element of loginFormFields) {
    element.classList.add("hidden");
  }
  const recoveryFormFields = document.getElementsByClassName("recoveryform");
  for (let element of recoveryFormFields) {
    element.classList.remove("hidden");
  }
};

const getRecoveryMail = () => {
  const emailTag = document.getElementById("username");

  let formData = {
    email: emailTag.value,
  };

  let dataJSON = JSON.stringify(formData);

  let options = {
    method: "POST",
    body: dataJSON,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:6600/users/recoverypassword/", options)
  //fetch("https://ada.bunam.unam.mx/iagen-api/users/recoverypassword/", options)
    .then((response) => response.json())
    .then((data) => {
      if (!data.user) {
        displayLoginMessage('El correo electrónico no está registrado.');
        return;
      }
      const successMessage = document.getElementsByClassName("recoveryform-success")[0];
      successMessage.classList.remove("hidden");
      setTimeout(() => {
        window.location.href = '/'
      }, 5000)
    })
    .catch((error) => {
      console.log(error);
      displayLoginMessage("Ocurrió un error inesperado. Intente más tarde.");
    });
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
          <div className="recoveryform-success bg-green-600 text-white p-4 text-center rounded hidden">
              <p>Se ha enviado un<br />correo electrónico<br />con las instrucciones para<br />recuperar tu contraseña.</p>
            </div>
          <form>
            <div>
              <label htmlFor="username">correo electrónico</label>
              <input type="mail" name="username" id="username" />
            </div>
            <div className="loginform-field">
              <label htmlFor="password">contraseña</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="text-right py-2 loginform-field">
              <a className="text-gray-500 underline text-sm mr-4 cursor-pointer" onClick={displayRecoveryForm}> Olvidé mi contraseña</a>
              <input type="button" onClick={sendLogin} value="Iniciar sesión" />
            </div>
            <div className="recoveryform hidden text-right">
              <input type="button" onClick={getRecoveryMail} value="Recuperar contraseña" />
            </div>
          </form>
          <div className="loginform-field">
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
