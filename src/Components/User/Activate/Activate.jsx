import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Activate.css";

const API_URL = import.meta.env.VITE_API_URL;

const Activate = () => {
  const { userHash } = useParams();
  const [data, setData] = useState(null);
  let activateCount = 0;

  useEffect(() => {
    if (userHash !== undefined) {

    let options = {
      method: "POST",
      body: JSON.stringify({
        hash: userHash,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/users/activate`, options);
        const result = await response.json();
        console.log(result);
        if (activateCount === 0) {
          setData(result);
          activateCount++;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }
  }, []);


  return (
    <div className="activate">
      {data !== null ? (
        <>
          {data.user === true ? (
            <>
              <h2 className="activate__title">Cuenta activa</h2>
              <div className="activate__advice">&nbsp;</div>
              <p className="activate__info">
                Su cuenta se ha activado con éxito.
              </p>
              <p className="activate__info">
                Le invitamos a consultar nuestra{" "}
                <NavLink to="/2a-jornada/workshops/">
                  oferta de talleres
                </NavLink>
                . Si ya cuenta con alguna experiencia en el aula con
                Inteligencia Artificial Generativa puede participar en las{" "}
                <NavLink to="/2a-jornada/call-for/">
                  presentaciones relámpago
                </NavLink>
                .
              </p>
              <p className="activate__signin">
                <NavLink to="/user/signin">Iniciar sesión</NavLink>
              </p>
            </>
          ) : (
            <>
              <h2 className="activate__title">Activar cuenta</h2>
              <div className="activate__advice">&nbsp;</div>
              <p className="activate__info warning">
                El enlace para activar la cuenta no es válido.
              </p>
              <p className="activate__signin">
                <NavLink to="/user/getactivate/">
                  Solicitar recuperación
                </NavLink>
              </p>
            </>
          )}
        </>
      ) : (
        <>
          <h2 className="activate__title">Activar cuenta</h2>
          <div className="activate__advice">&nbsp;</div>
          <p className="activate__info warning">
            El enlace para activar la cuenta no es válido.
          </p>
          <p className="activate__signin">
            <NavLink to="/user/getactivate/">Solicitar recuperación</NavLink>
          </p>
        </>
      )}
    </div>
  );
};

export default Activate;
