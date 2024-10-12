import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import FooterBlock from "../../FooterBlock/FooterBlock";
import "./Profile.css";

const Profile = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const cookies = new Cookies();
  const [workshops, setWorkshops] = useState(null);
  const [lightning, setLightning] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/agenda/${cookies.get("id")}`)
      .then((response) => response.json())
      .then((data) => {
        setWorkshops(data);
      });

    fetch(`${API_URL}/lightning/${cookies.get("id")}`)
      .then((response) => response.json())
      .then((data) => {
        setLightning(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <HeaderBlock />
      <section className="profile">
        <header className="profile__info">
          <div>
            <h2>Mi espacio</h2>
          </div>
          <div>
            <NavLink to="/user/signout">Cerrar sesión</NavLink>
          </div>
        </header>
        <section className="profile__events">
          <article className="profile__events--schedule">
            <h3>Mi agenda</h3>
            <div className="profile__schedule empty">
              <p>No cuenta con sesiones programadas.</p>
              <p className="profile__button-empty">
                <NavLink to="/2a-jornada/">Ver programa</NavLink>
              </p>
            </div>
          </article>
          <article className="profile__events--workshops">
            <h3>Mis talleres</h3>
            {workshops === null || workshops.length === 0 ? (
              <div className="profile__schedule empty">
                <p>No cuenta con talleres programados.</p>
                <p className="profile__button-empty">
                  <NavLink to="/2a-jornada/workshops/">Ver talleres</NavLink>
                </p>
              </div>
            ) : (
              <div className="profile__schedule">
                {workshops.map((workshop) => (
                  <div className="profile__schedule--item" key={workshop.id}>
                    <p>{workshop.title}</p>
                    <p>{workshop.ocurrenceDay}</p>
                    <p>
                      <NavLink to={`/2a-jornada/workshops/${workshop.id}`}>
                        Ver detalles
                      </NavLink>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>
        </section>
        <div className="profile__submissions">
          <article className="profile__submissions--works">
            <h3>Mis presentaciones</h3>
            {lightning === null || lightning.length === 0 ? (
              <div className="profile__submissions--item empty">
                <p>No hay presentaciones enviadas.</p>
                <p className="profile__button-empty">
                  <NavLink to="/user/submission/">Hacer un envío</NavLink>
                </p>
              </div>
            ) : (
              <>
                {lightning.map((lightning) => (
                  <div className="profile__submissions--item" key={lightning.id}>
                    <h5>{lightning.title}</h5>
                    <p>
                      {(() => {
                        const keywordsArray = lightning.keywords.split(",");
                        if (keywordsArray[0] === "") {
                          return;
                        }
                        return keywordsArray.map((keyword, index) => {
                          return <span key={index} className="profile__submissions--item-keyword">{keyword}</span>;
                        });
                      })()}
                    </p>
                    <p className="text-right">
                      <a
                        href={lightning.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver video
                      </a>
                    </p>
                  </div>
                ))}
              </>
            )}
          </article>
        </div>
      </section>
      <FooterBlock />
    </>
  );
};

export default Profile;
