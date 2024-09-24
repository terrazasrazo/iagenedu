import Cookies from "universal-cookie";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import FooterBlock from "../../FooterBlock/FooterBlock";

import "./Profile.css";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const cookies = new Cookies();

  return (
    <>
      <HeaderBlock />
      <section className="profile">
        <header className="profile__info">
          <div><h2>Mi espacio</h2></div>
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
            <div className="profile__schedule empty">
              <p>No cuenta con talleres programados.</p>
              <p className="profile__button-empty">
                <NavLink to="/2a-jornada/workshops/">Ver talleres</NavLink>
              </p>
            </div>
          </article>
        </section>
        <div className="profile__submissions">
          <article className="profile__submissions--works">
            <h3>Mis presentaciones</h3>
            <div className="profile__schedule empty">
              <p>No hay presentaciones enviadas.</p>
              <p className="profile__button-empty">
                <NavLink to="/2a-jornada/call-for/">Ir a la convocatoria</NavLink>
              </p>
            </div>
          </article>
        </div>
      </section>
      <FooterBlock />
    </>
  );
};

export default Profile;
