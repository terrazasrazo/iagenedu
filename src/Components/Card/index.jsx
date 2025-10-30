import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = (data) => {
  let level = "";
  if (data.data.level === 1) level = "basic";
  if (data.data.level === 2) level = "intermediate";
  if (data.data.level === 3) level = "advanced";

  let availableSeats = data.data.participants - data.data.assistantsCount;
  if (availableSeats < 0) availableSeats = 0;

  const keywordsArray = data.data.keywords.split(",");

  const workshopContent = (content) => {
    const htmlContent = { __html: content };
    return <div dangerouslySetInnerHTML={htmlContent}></div>;
  };

  return (
    <article className={`${level} workshop`}>
      <header className="workshop__header">
        <h3 className="workshop__header--title">{data.data.title}</h3>
      </header>
      <main className="workshop__details">
        <p className="workshop__details--ocurrence">
          <span>{data.data.ocurrenceDay}</span>
        </p>
        {workshopContent(data.data.purpouse)}
        <p className="workshop__details--link">
          <NavLink to={`/workshop/${data.data.id}`}>
            ver detalles del taller
          </NavLink>
        </p>
      </main>
      <footer className="workshop__tags">
        {keywordsArray.map((keyword, index) => {
          return (
            <span key={index} className="workshop__tags--item">{keyword}</span>
          );
        })}
      </footer>
    </article>
  );
};

export default Card;
