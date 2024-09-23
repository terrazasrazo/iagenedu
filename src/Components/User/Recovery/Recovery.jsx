import { NavLink } from "react-router-dom";
import "./Recovery.css";

const Recovery = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const displayRecoveryMessage = (status, message) => {
    let recoveryMessage = document.getElementsByClassName("recovery__message")[0];
    recoveryMessage.getElementsByTagName("p")[0].innerHTML = "";
    recoveryMessage.getElementsByTagName("p")[0].innerHTML = message;
    recoveryMessage.classList.remove("error");
    recoveryMessage.classList.remove("success");
    recoveryMessage.classList.add(status);
    recoveryMessage.classList.remove("hidden");
    setTimeout(() => {
      recoveryMessage.classList.add("hidden");
    }, 10000);
  }

  const recoverPassword = (event) => {
    event.preventDefault();
    const emailTag = document.getElementsByName("email")[0];
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
    fetch(`${API_URL}/users/recovery/`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          displayRecoveryMessage("error", data.error);
          return;
        }
        displayRecoveryMessage("success", "Se ha enviado un correo con las instrucciones para recuperar su contraseña.");
      })
      .catch((error) => {
        console.log(error);
        displayRecoveryMessage("error", "Ocurrió un error inesperado. Intente más tarde.");
      });
  }

  return (
    <div className="recovery">
      <h2 className="recovery__title">Recuperar contraseña</h2>
      <p className="recovery__advice">
        ¿Ya cuenta con sus datos de acceso? <NavLink to="/user/signin">Iniciar sesión</NavLink>
      </p>
      <div className="recovery__message hidden">
        <p></p>
      </div>
      <form className="recovery__form" onSubmit={() => recoverPassword(event)}>
        <div className="recovery__item">
          <label htmlFor="email" className="recovery__item--label">Correo electrónico</label>
          <input type="email" name="email" className="recovery__item--input" />
        </div>
        <div className="recovery__item">
          <button type="submit" className="recovery__item--button">Recuperar contraseña</button>
        </div>
      </form>
    </div>
  );
}

export default Recovery;
