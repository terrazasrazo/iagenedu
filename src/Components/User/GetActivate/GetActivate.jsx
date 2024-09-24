import { NavLink, useNavigate } from "react-router-dom";
import "./GetActivate.css";

const GetActivate = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const displayGetActivateMessage = (status, message) => {
    let getactivateMessage = document.getElementsByClassName("getactivate__message")[0];
    let emailTag = document.getElementById("email");
    emailTag.value = "";
    getactivateMessage.getElementsByTagName("p")[0].innerHTML = "";
    getactivateMessage.getElementsByTagName("p")[0].innerHTML = message;
    getactivateMessage.classList.remove("error");
    getactivateMessage.classList.remove("success");
    getactivateMessage.classList.add(status);
    getactivateMessage.classList.remove("hidden");
    setTimeout(() => {
      getactivateMessage.classList.add("hidden");
      if(status === "success") {
        navigate("/user/signin");
      }
    }, 10000);
  };

  const getActivateAccount = (event) => {
    event.preventDefault();
    const emailTag = document.getElementById("email");
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
    fetch(`${API_URL}/users/getactivate/`, options)
      .then((response) => response.json())
      .then((data) => {
        if (!data.user) {
          displayGetActivateMessage("error","La cuenta ya se encuentra activa o el correo electrónico no está registrado.");
          return;
        }
        displayGetActivateMessage("success","Se ha enviado un correo con las instrucciones para activar su cuenta.");
      })
      .catch((error) => {
        console.log(error);
        displayGetActivateMessage("error","Ocurrió un error inesperado. Intente más tarde.");
      });
  }

  return (
    <div className="getactivate">
      <h2 className="getactivate__title">Solicitar activación</h2>
      <p className="getactivate__advice">
      ¿Ya está activa su cuenta?{" "}
      <NavLink to="/user/signin">Iniciar sesión</NavLink>
      </p>
      <div className="getactivate__message hidden">
        <p></p>
      </div>
      <form className="getactivate__form" onSubmit={() => getActivateAccount(event)}>
        <div className="getactivate__item">
          <label htmlFor="email" className="getactivate__item--label">Correo electrónico</label>
          <input type="email" name="email" id="email" className="getactivate__item--input" />
        </div>
        <div className="getactivate__item">
          <button type="submit" className="getactivate__item--button">Solicitar activación</button>
        </div>
      </form>
    </div>
  );
}

export default GetActivate;
