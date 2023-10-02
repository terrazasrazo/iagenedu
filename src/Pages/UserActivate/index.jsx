import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./UserActivate.css";

const triggerLogin = () => {
  const loginButton = document.getElementById("login");
  loginButton.click();
}

const validateAccount = (userHash) => {
  const [jsx, setJsx] = useState(null);

  useEffect(() => {
    if (userHash === undefined) return null;

    fetch(`http://localhost:6600/users/activate/${userHash}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.user === true) {
          setJsx(
            <>
              <h2 className="text-2xl mb-12">Tu cuenta ha sido activada</h2>
              <p>Ahora puedes:</p>
              <p className="mt-8"><NavLink to="/" className="goto-home">ir al inicio</NavLink><a className="trigger-login" onClick={triggerLogin}>iniciar sesión</a></p>
            </>
          );
        } else {
          setJsx(
            <>
              <h2>la cuenta no ha sido activada</h2>
              <p>El enlace de activación es incorrecto o ya ha sido utilizado</p>
            </>
          );
        }
      });
  }, [userHash]);

  return jsx;
};

function UserActivate() {
  const { userHash } = useParams();
  return <section id="user-activate">{validateAccount(userHash)}</section>;
}

export default UserActivate;
