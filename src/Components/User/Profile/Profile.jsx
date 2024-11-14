import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import FooterBlock from "../../FooterBlock/FooterBlock";
import scheduleArray from "../../Jornada2th/Schedule/Schedule";
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

  const handleClick = () => {
    const clickTime = new Date().toISOString();
    console.log("Hora del clic:", clickTime);

    let registerData = {
      userid: cookies.get("id"),
    };

    let dataJSON = JSON.stringify(registerData);

    let options = {
      method: "POST",
      body: dataJSON,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${API_URL}/attendance/`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          return;
        }
        console.log(data);
        window.location.href =
          "https://unam.zoom.us/webinar/register/WN__SgTPRZ9Q720zfHQdjwkpQ";
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <div className="profile__schedule">
              <div className="profile__schedule--14nov">
                <h3>14 de noviembre de 2024</h3>
                {scheduleArray[0].items.map((item, index) => {
                  if (index !== 3 && index !== 4 && index !== 5) {
                    return (
                      <div
                        key={index}
                        className="profile__schedule--item-program"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault(); // Evita que el enlace navegue inmediatamente
                            handleClick(); // Ejecuta la función de registro y redirección
                          }}
                        >
                          <span>{item.time}</span>
                          <span
                            dangerouslySetInnerHTML={{ __html: item.event }}
                          ></span>
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="profile__schedule--15nov">
                <h3>15 de noviembre de 2024</h3>
                {scheduleArray[1].items.map((item, index) => {
                  if (index !== 2 && index !== 3 && index !== 5) {
                    return (
                      <div
                        key={index}
                        className="profile__schedule--item-program"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault(); // Evita que el enlace navegue inmediatamente
                            handleClick(); // Ejecuta la función de registro y redirección
                          }}
                        >
                          <span>{item.time}</span>
                          <span
                            dangerouslySetInnerHTML={{ __html: item.event }}
                          ></span>
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
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
                      <a
                        href={workshop.zoomSession}
                        target="_blank"
                        className="profile__schedule--item-zoomlink"
                        rel="noreferrer"
                      >
                        Enlace al taller
                      </a>
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
                {/*<p className="profile__button-empty">
                  <NavLink to="/user/submission/">Hacer un envío</NavLink>
                </p>*/}
              </div>
            ) : (
              <>
                {lightning.map((lightning) => (
                  <div
                    className="profile__submissions--item"
                    key={lightning.id}
                  >
                    <h5>{lightning.title}</h5>
                    <p>
                      {(() => {
                        const keywordsArray = lightning.keywords.split(",");
                        if (keywordsArray[0] === "") {
                          return;
                        }
                        return keywordsArray.map((keyword, index) => {
                          return (
                            <span
                              key={index}
                              className="profile__submissions--item-keyword"
                            >
                              {keyword}
                            </span>
                          );
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
