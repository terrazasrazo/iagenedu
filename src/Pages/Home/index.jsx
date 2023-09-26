import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import ProgramItem from "../../Components/ProgramItem";
import "./Home.css";

const cookies = new Cookies();

const registerAnnouncement = () => {
  if(cookies.get("id") === undefined) {
    return (
      <li>
          <NavLink to={`/register/`} className="hover:text-orange-600 underline">Registro como participante</NavLink>
      </li>
    )
  }
}

function Home() {
  return (
    <div id="home">
      <header>
        <div className="w-1/3">
          <img
            src="images/iagen-icon.svg"
            alt="Inteligencia Artificial Generativa en Educación"
            width={600}
            className="block mx-auto"
          />
        </div>
        <div className="w-2/3">
          <h1>
            I JORNADA DE INTELIGENCIA
            <br />
            ARTIFICIAL GENERATIVA
            <br />
            UNAM 2023
          </h1>
          <h2>23 Y 24 DE OCTUBRE, EN LÍNEA</h2>
        </div>
      </header>
      <section>
        <div className="w-3/4">
          <h2>Propósito</h2>
          <p>
            Explorar los usos, posibilidades y posibles futuros de la IA
            generativa en la educación media superior y superior para su
            aplicación efectiva y ética.
          </p>
          <h2>Líneas temáticas</h2>
          <ul>
            <li>
              Las IES y la IA generativa: posturas, retos, avances y
              lineamientos
            </li>
            <li>AI generativa para docentes y diseñadores curriculares</li>
            <li>Estudiantes y su uso de la IA generativa</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul>
            { registerAnnouncement() }
            <li>
              <NavLink to={`/call-for/`} className="hover:text-orange-600 underline">
                Convocatoria para el envío de trabajos de docentes y estudiantes
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section id="institutions">
        <ul>
          <li>
            <a href="">
              <img src="images/logo-cecav.png" alt="CECAv" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="images/logo-cuaieed.png" alt="CUAIEED" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="images/logo-dgbsdi.png" alt="DGBSDI" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="images/logo-dgtic.png" alt="DGTIC" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="images/logo-fi.png" alt="FI" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="images/logo-icat.png" alt="ICAT" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="images/logo-ier.png" alt="IER" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="images/logo-iisue.png" alt="IISUE" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Programa</h2>
      </section>
      <section id="schedule">
        <div className="w-1/2">
          <h3>Lunes 23 de octubre</h3>
          <ProgramItem hour="9:00" title="Bienvenida e inauguración" description="" />
          <ProgramItem hour="9:30" title={`Mesa: "IA generativa para el aprendizaje"`} description="" />
          <ProgramItem hour="10:45" title={`Mesa: "Experiencias educativas de IA generativa en la UNAM"`} description="" />
          <div className="program-item">
            <div className="w-1/5">
              <p>12:00</p>
            </div>
            <div className="w-4/5 text-center">
              <p>Talleres</p>
            </div>
          </div>
          <ProgramItem hour="16:00" title="Presentaciones relámpago" description="" />
        </div>
        <div className="w-1/2">
          <h3>Martes 24 de octubre</h3>
          <ProgramItem hour="9:00" title={`Mesa: "Investigación en IAGen en la UNAM: su impacto educativo"`} description="" />
          <ProgramItem hour="10:00" title={`Mesa: "IA generativa y evaluación: ¿se acabaron los exámenes?"`} description="" />
          <ProgramItem hour="11:00" title={`Mesa: "Futuros de la IA generativa en la UNAM: ¿viaje sin retorno?"`} description="" />
          <div className="program-item">
            <div className="w-1/5">
              <p>12:00</p>
            </div>
            <div className="w-4/5 text-center">
              <p>Talleres</p>
            </div>
          </div>
          <ProgramItem hour="16:00" title="Presentaciones relámpago" description="" />
          <ProgramItem hour="18:00" title="Clausura" description="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
