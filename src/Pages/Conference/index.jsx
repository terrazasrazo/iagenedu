import { useParams, NavLink } from "react-router-dom";
import scheduleArray from "../../Components/Jornada2th/Schedule/Schedule";
import "./Conference.css";

function Conference() {
  const { conferenceName } = useParams();

  const findEventByLink = (scheduleArray, link) => {
    for (const day of scheduleArray) {
      const foundEvent = day.items.find((event) => event.link === link);
      if (foundEvent) {
        return foundEvent;
      }
    }
    return null; // Devuelve null si no encuentra el evento
  }

  const conference = findEventByLink(scheduleArray, conferenceName);

  return (
    <section className="conference">
      <h2>{conference.event}</h2>
      <article>
        <div className="video mb-10 lg:my-20">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${conference.video}`}
            title={conference.event}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="actors">
          {conference.actors.map((actor, index) => {
            return (
              <div key={index} className="actor">
                <h4>{actor.name}</h4>
                <p>{actor.institution}</p>
              </div>
            );
          })}
        </div>
      </article>
      <p className="back-to-program">
        <NavLink to="/2a-jornada/">Volver al programa</NavLink>
      </p>
    </section>
  );
}

export default Conference;
