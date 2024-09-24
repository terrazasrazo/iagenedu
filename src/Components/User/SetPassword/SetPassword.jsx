import { useParams, NavLink, useNavigate } from "react-router-dom";
import "./SetPassword.css";

const SetPassword = () => {
  const { userHash } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const displaySetPasswordMessage = (status) => {
    let setPasswordMessage = document.getElementsByClassName("setpassword__message")[0];
    setPasswordMessage.getElementsByTagName("p")[0].innerHTML = "";
    if(status) {
      setPasswordMessage.classList.add("success");
      setPasswordMessage.getElementsByTagName("p")[0].innerHTML = "Contraseña establecida correctamente.";
    } else {
      setPasswordMessage.classList.add("error");
      setPasswordMessage.getElementsByTagName("p")[0].innerHTML = "No fue posible establecer la contraseña. Solicite un nuevo enlace.";
    }
    setPasswordMessage.classList.add(status);
    setPasswordMessage.classList.remove("hidden");
    setTimeout(() => {
      setPasswordMessage.classList.remove("error");
      setPasswordMessage.classList.remove("success");
      setPasswordMessage.classList.add("hidden");
      navigate("/user/signin");
    }, 5000);
  };

  const setNewPassword = (event) => {
    event.preventDefault();
    const passwordTag = document.getElementsByName("password")[0];
    const passwordConfirmTag = document.getElementsByName("passwordconfirm")[0];

    if (passwordTag.value !== passwordConfirmTag.value) {
      return;
    } else {
      let formData = {
        hash: userHash,
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

      fetch(`${API_URL}/users/changepassword`, options)
        .then((response) => response.json())
        .then((data) => {
          displaySetPasswordMessage(data.newPassword)
        });
    }
  };

  if (userHash) {
    return (
      <div className="setpassword">
        <h2 className="setpassword__title">Establecer contraseña</h2>
        <p className="setpassword__advice">&nbsp;</p>
        <div className="setpassword__message hidden">
          <p></p>
        </div>
        <form
          className="setpassword__form"
          onSubmit={() => setNewPassword(event)}
        >
          <div className="setpassword__item">
            <label htmlFor="password" className="setpassword__item--label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="setpassword__item--input"
            />
          </div>
          <div className="setpassword__item">
            <label
              htmlFor="passwordconfirm"
              className="setpassword__item--label"
            >
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="passwordconfirm"
              id="passwordconfirm"
              className="setpassword__item--input"
            />
          </div>
          <div className="setpassword__item">
            <button type="submit" className="setpassword__item--button">
              Establecer contraseña
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="setpassword">
        <h2 className="setpassword__title">Establecer contraseña</h2>
        <p className="setpassword__advice">&nbsp;</p>
        <p className="setpassword__message warning">
          El enlace para establecer contraseña no es válido.
        </p>
        <div className="setpassword__advice">
          ¿Su enlace no funciona?{" "}
          <NavLink to="/user/recovery">Solicitar recuperación</NavLink>
        </div>
        <div className="setpassword__item">
          <NavLink to="/" className="setpassword__item--button">
            Ir al inicio
          </NavLink>
        </div>
      </div>
    );
  }
};

export default SetPassword;
