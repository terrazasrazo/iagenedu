import { NavLink } from "react-router-dom";
import InstitutionsBlock from "../../Components/Institutions/InstitutionsBlock";
import LastResourcesBlock from "../../Components/LastResourcesBlock/LastResourcesBlock";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="jornada-2">
        <div className="jornada-2__image">
          <img src="images/512.png" width="320" alt="2a. Jornada IAGen en Educación UNAM 2024" />
        </div>
        <div className="jornada-2__links">
          <h2>2<sup>a</sup> Jornada IAGen en Educación UNAM 2024</h2>
          <p className="jornada-2__links--item"><NavLink to="/user/signin">Inicia sesión para ver enlaces de sesiones</NavLink></p>
          <p className="jornada-2__links--item"><NavLink to="/2a-jornada">Ver programa completo</NavLink></p>
        </div>
      </section>
      <section className="hero">
        <div className="video">
          <video
            src="video/teachers.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
          <img
            src="images/overlay.png"
            alt="Overlay"
            className="w-full absolute bottom-0"
          />
        </div>
        <div className="description">
          <p className="description--text">
            Universidades de todo el mundo están integrando la inteligencia
            artificial generativa en la enseñanza. En la UNAM, este enfoque se
            impulsa desde el <strong>Grupo de Trabajo de IAGen en educación</strong> como parte del Plan de Desarrollo
            Institucional. Aquí ofrecemos eventos, como las Jornadas UNAM sobre
            el tema, recursos para su análisis en el aula, publicaciones y guías
            para su implementación.
          </p>
        </div>
      </section>
      <InstitutionsBlock />
      <LastResourcesBlock />
    </>
  );
}

export default Home;
