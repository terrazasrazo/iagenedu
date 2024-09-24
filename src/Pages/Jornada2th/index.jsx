import { useParams, NavLink } from "react-router-dom";
import "./Jornada2th.css";

function Jornada2th() {
  const { jornadaState } = useParams();

  const jornadaStateData = (jornadaState) => {
    if (jornadaState === "workshops") {
      return (
        <article className="jornada2th__workshops">
          <h3 className="text-center text-4xl my-40">
            Próximamente los talleres
          </h3>
        </article>
      );
    } else if (jornadaState === "call-for") {
      return (
        <article className="jornada2th__callfor">
          <img src="/images/jornada2th/convocatoria.jpg" alt="Convocatoria" />
        </article>
      );
    } else {
      return (
        <article className="jornada2th__schedule">
          <h3 className="text-center text-4xl my-40">
            Próximamente el programa completo
          </h3>
        </article>
      );
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
      {jornadaState === "call-for" ? (
        <></>
      ) : (
        <article className="jornada2th__savethedate">
          <img src="/images/jornada2th.jpg" alt="2a Jornada" />
        </article>
      )}
      {jornadaStateData(jornadaState)}
    </section>
  );
}

export default Jornada2th;
