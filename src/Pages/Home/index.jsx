import { NavLink } from "react-router-dom";
import InstitutionsBlock from "../../Components/Institutions/InstitutionsBlock";
import LastResourcesBlock from "../../Components/LastResourcesBlock/LastResourcesBlock";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="jornada-2">
        <NavLink to="/2a-jornada">
          <img src="images/jornada2th.jpg" alt="2a Jornada" />
        </NavLink>
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
