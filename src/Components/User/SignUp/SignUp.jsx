import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const capitalizeFirstLetterOfEachWord = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  const displaySignUpMessage = (status, message) => {
    let signupMessage = document.getElementsByClassName("signup__message")[0];
    signupMessage.getElementsByTagName("p")[0].innerHTML = "";
    signupMessage.getElementsByTagName("p")[0].innerHTML = message;
    signupMessage.classList.remove("error");
    signupMessage.classList.remove("success");
    signupMessage.classList.add(status);
    signupMessage.classList.remove("hidden");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      signupMessage.classList.add("hidden");
      if(status === "success") {
        navigate("/");
      }
    }, 10000);
  }

  const sendSignUp = (event) => {
    event.preventDefault();

    const emailTag = document.getElementsByName("email")[0];
    const emailConfirmTag = document.getElementsByName("emailconfirm")[0];
    const passwordTag = document.getElementsByName("password")[0];
    const passwordConfirmTag = document.getElementsByName("passwordconfirm")[0];
    const nameTag = document.getElementsByName("name")[0];
    const lastnameTag = document.getElementsByName("lastname")[0];
    const entityTag = document.getElementsByName("entity")[0];
    const accountTag = document.getElementsByName("account")[0];
    const curpTag = document.getElementsByName("curp")[0];
    const studyLevelTag = document.getElementsByName("studylevel")[0];

    if(emailTag.value !== emailConfirmTag.value) {
      displaySignUpMessage("error", "Los correos no coinciden");
      return;
    }

    if(passwordTag.value !== passwordConfirmTag.value) {
      displaySignUpMessage("error", "Las contraseñas no coinciden");
      return;
    }

    let formData = {
      email: emailTag.value,
      password: passwordTag.value,
      name: capitalizeFirstLetterOfEachWord(nameTag.value),
      lastname: capitalizeFirstLetterOfEachWord(lastnameTag.value),
      entity: entityTag.value,
      account: accountTag.value,
      curp: curpTag.value.toUpperCase(),
      studyLevel: studyLevelTag.value
    };

    let dataJSON = JSON.stringify(formData);

    let options = {
      method: "POST",
      body: dataJSON,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${API_URL}/users/signup/`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          displaySignUpMessage("error", data.error);
          return;
        }
        displaySignUpMessage("success", "Registro exitoso. Se ha enviado un correo con las instrucciones para activar su cuenta.");
      })
      .catch((error) => {
        console.log(error);
        displaySignUpMessage("error", "Ocurrió un error inesperado. Intente más tarde.");
      });
  }

  return (
    <div className="signup">
      <h2 className="signup__title">Registro</h2>
      <p className="signup__advice">
        ¿Ya cuenta con registro?{" "}
        <NavLink to="/user/signin">Iniciar sesión</NavLink>
      </p>
      <div className="signup__message hidden">
        <p></p>
      </div>
      <form className="signup__form" autoComplete="off" onSubmit={() => sendSignUp(event)}>
        <div className="signup__item">
          <a
            href="https://lib.cuaed.unam.mx/portales/aviso-privacidad-simplificado.html"
            target="_blank"
            rel="noreferrer"
            className="signup__item--label"
          >
            Aviso de privacidad simplificado de la Coordinación de Universidad
            Abierta y Educación Digital de la UNAM
          </a>
          <label htmlFor="privacyterms" className="signup__item--input">
            <input
              type="checkbox"
              name="privacyterms"
              value="privacy"
              id="privacy"
              className="signup__item--checkbox"
              required
            />{" "}
            He leído el Aviso de Privacidad
          </label>
        </div>
        <div className="signup__item">
          <label htmlFor="email" className="signup__item--label">
            Correo electrónico
          </label>
          <input type="email" name="email" className="signup__item--input" />
        </div>
        <div className="signup__item">
          <label htmlFor="emailconfirm" className="signup__item--label">
            Confirmar correo electrónico
          </label>
          <input
            type="email"
            name="emailconfirm"
            className="signup__item--input"
          />
        </div>
        <div className="signup__item">
          <label htmlFor="password" className="signup__item--label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="signup__item--input "
          />
        </div>
        <div className="signup__item">
          <label htmlFor="passwordconfirm" className="signup__item--label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            name="passwordconfirm"
            className="signup__item--input "
          />
        </div>
        <div className="signup__item">
          <label htmlFor="name" className="signup__item--label">
            Nombre (como desea que aparezca en su constancia)
          </label>
          <input
            type="text"
            className="signup__item--input"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="signup__item">
          <label htmlFor="lastname" className="signup__item--label">
            Apellido (como desea que aparezca en su constancia)
          </label>
          <input
            type="text"
            className="signup__item--input"
            name="lastname"
            id="lastname"
            required
          />
        </div>
        <div className="signup__item">
          <label htmlFor="entity" className="signup__item--label">Entidad dentro de la UNAM</label>
          <input
            type="text"
            className="signup__item--input"
            name="entity"
            id="entity"
            required
          />
        </div>
        <div className="signup__item">
          <label htmlFor="account" className="signup__item--label">Número de trabajador o de cuenta UNAM</label>
          <input
            type="number"
            className="signup__item--input"
            name="account"
            id="account"
            required
          />
        </div>
        <div className="signup__item">
          <label htmlFor="curp" className="signup__item--label">CURP</label>
          <input
            type="text"
            className="signup__item--input"
            name="curp"
            id="curp"
            required
            minLength="18"
            maxLength="18"
          />
          <p className="text-sm text-red-800">
            Favor de verificar. Si está incorrecta, no se emitirá constancia
          </p>
        </div>
        <div className="signup__item">
          <label htmlFor="studylevel" className="signup__item--label">Grado máximo de estudios</label>
          <select name="studylevel" className="signup__item--select" id="studyLevel" required>
            <option value="">Seleccione una opción</option>
            <option value="Secundaria">Secundaria</option>
            <option value="Bachillerato">Bachillerato</option>
            <option value="Licenciatura">Licenciatura</option>
            <option value="Maestría">Maestría</option>
            <option value="Doctorado">Doctorado</option>
          </select>
        </div>
        <div className="signup__item-submit">
          <button type="submit" className="signup__item--button">
            Completar registro
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
