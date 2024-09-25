import { useParams, NavLink } from "react-router-dom";
import Schedule from "../../Components/Jornada2th/Schedule/Schedule";
import Workshops from "../../Components/Jornada2th/Workshops/Workshops";
import WorkshopDetails from "../../Components/Jornada2th/WorkshopDetails/WorkshopDetails";
import "./Jornada2th.css";

function Jornada2th() {
  const { jornadaState, jornadaDetails } = useParams();

  const jornadaStateData = (jornadaState) => {
    if (jornadaState === "workshops" && jornadaDetails === undefined) {
      return <Workshops />;
    } else if (jornadaState === "workshops" && jornadaDetails !== undefined) {
      return <WorkshopDetails />;
    } else if (jornadaState === "call-for") {
      return (
        <article className="jornada2th__callfor">
          <img src="/images/jornada2th/convocatoria.jpg" alt="Convocatoria" />
        </article>
      );
    } else {
      return <Schedule />;
    }
  };

  return (
    <section className="jornada2th">
      <header className="jornada2th__header">
        <nav>
          <ul>
            <li>
              <NavLink to="/2a-jornada">Programa</NavLink>
            </li>
            <li>
              <NavLink to="/2a-jornada/workshops">Talleres</NavLink>
            </li>
            <li>
              <NavLink to="/2a-jornada/call-for">Convocatoria</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {jornadaStateData(jornadaState)}
    </section>
  );
}

export default Jornada2th;
