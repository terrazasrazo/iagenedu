import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import CryptoJS from 'crypto-js';
import "./SignIn.css";


const SignIn = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const cookies = new Cookies();
  const navigate = useNavigate();
  const myPrhase = import.meta.env.VITE_MY_PHRASE;

  const displayLoginMessage = (message) => {
    let signinMessage = document.getElementsByClassName("signin__message")[0];
    signinMessage.getElementsByTagName("p")[0].innerHTML = "";
    signinMessage.getElementsByTagName("p")[0].innerHTML = message;
    signinMessage.classList.remove("hidden");
    setTimeout(() => {
      signinMessage.classList.add("hidden");
    }, 10000);
  };

  const sendLogin = (event) => {
    event.preventDefault();
    const emailTag = document.getElementById("email");
    const passwordTag = document.getElementById("password");

    let formData = {
      email: emailTag.value,
      password: CryptoJS.SHA256(passwordTag.value, myPrhase).toString(CryptoJS.enc.Hex),
    };

    let dataJSON = JSON.stringify(formData);

    let options = {
      method: "POST",
      body: dataJSON,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${API_URL}/users/signin/`, options)
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
        navigate("/user/profile");
      })
      .catch((error) => {
        console.log(error);
        displayLoginMessage("Ocurrió un error inesperado. Intente más tarde.");
      });
  };
  return (
    <div className="signin">
      <h2 className="signin__title">Iniciar sesión</h2>
      <p className="signin__advice">
        ¿Aún no se ha registrado? <NavLink to="/user/signup">Registro</NavLink>
      </p>
      <div className="signin__message hidden">
        <p></p>
      </div>
      <form onSubmit={() => sendLogin(event)}>
        <div className="signin__item">
          <label htmlFor="email" className="signin__item--label">
            Correo electrónico
          </label>
          <input type="email" name="email" id="email" className="signin__item--input" />
        </div>
        <div className="signin__item">
          <label htmlFor="password" className="signin__item--label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="signin__item--input "
          />
        </div>
        <div className="signin__item">
          <p className="signin__advice">
            ¿No recuerda su contraseña?{" "}
            <NavLink to="/user/recovery">Recuperar contraseña</NavLink>
          </p>
        </div>
        <div className="signin__item">
          <button type="submit" className="signin__item--button">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
