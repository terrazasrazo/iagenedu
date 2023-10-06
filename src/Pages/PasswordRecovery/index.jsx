import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PasswordRecovery.css";

const validateHash = (items, userHash) => {
  if (items.date) {
    return (
      <form
        action=""
        method="POST"
        onSubmit={() => sendNewPassword(event, items, userHash)}
        autoComplete="off"
      >
        <div className="">
          <div className="p-4">
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              className="w-full"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="p-4">
            <label htmlFor="">Confirmar contraseña</label>
            <input
              type="password"
              className="w-full"
              name="confirm_password"
              id="confirm_password"
              required
            />
          </div>
        </div>
        <div className="text-right">
          <input type="submit" value="completar registro" />
        </div>
      </form>
    );
  } else {
    return (
      <div className="bg-white text-red-700 border-2 border-red-700 p-8 text-center rounded shadow">
        <h3>El enlace no es válido o ya ha sido utilizado.</h3>
        <p className="mt-8">
          <a href="/" className="bg-red-700 text-white p-2 rounded">
            Continuar
          </a>
        </p>
      </div>
    );
  }
};

const displayRegisterMessage = (message) => {
  let registerMessage = document.getElementById("registerMessage");
  registerMessage.getElementsByTagName("p")[0].textContent = "";
  registerMessage.getElementsByTagName("p")[0].textContent = message;
  registerMessage.classList.remove("hidden");
  setTimeout(() => {
    registerMessage.classList.add("hidden");
  }, 5000);
};

const sendNewPassword = (event, items, userHash) => {
  event.preventDefault();
  const passwordTag = document.getElementById("password");
  const confirmPasswordTag = document.getElementById("confirm_password");

  if (passwordTag.value !== confirmPasswordTag.value) {
    displayRegisterMessage("Las contraseñas no coinciden");
    return;
  } else {
    let newPasswordData = {
      password: passwordTag.value,
      hash: userHash,
      updatedAt: new Date(items.date),
    };

    let dataJSON = JSON.stringify(newPasswordData);
    console.log(dataJSON);
    let options = {
      method: "POST",
      body: dataJSON,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:6600/users/changepassword", options)
    //fetch("https://ada.bunam.unam.mx/iagen-api/users/changepassword/", options)
      .then((response) => response.json())
      .then((data) => {
        if(data.newPassword){
          document.getElementById("sendnewpassword-success").classList.remove("hidden");
          setTimeout(() => {
            window.location.href = "/";
          }, 5000);
        } else {
          displayRegisterMessage("Ocurrió un error al cambiar la contraseña. Intenta más tarde.");
        }
      });
  }
};

function PasswordRecovery() {
  const { userHash } = useParams();
  const [items, setItems] = useState(0);

  let dataJSON = JSON.stringify({ hash: userHash });
  let options = {
    method: "POST",
    body: dataJSON,
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch("http://localhost:6600/users/validatehash", options)
      //fetch("https://ada.bunam.unam.mx/iagen-api/workshopassistants/", options)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [userHash]);

  return (
    <>
      <div id="password-recovery">
        <div id="registerMessage" className="hidden">
          <div>
            <span>X</span>
            <p>Message</p>
          </div>
        </div>
        <main className="w-1/3 mx-auto bg-slate-50 rounded shadow-sm">
          <div id="sendnewpassword-success" className="bg-green-500 text-white p-4 rounded-t hidden">
            <p>La contraseña se ha cambiado con éxtio.</p>
            <p>Ahora puedes iniciar sesión.</p>
          </div>
          {validateHash(items, userHash)}
        </main>
      </div>
    </>
  );
}

export default PasswordRecovery;
