import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { KeywordContext } from "../../Context";
import "./Card.css";

const Card = (data) => {
  const context = useContext(KeywordContext);

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
      {data.data.assistantsCount >= 70 ? (
        <span className="workshop__details--seats full">Lugares agotados</span>
      ):(<span className="workshop__details--seats"></span>)}
      <header className="workshop__header">
        <h3 className="workshop__header--title">{data.data.title}</h3>
      </header>
      <main className="workshop__details">
        <p className="workshop__details--ocurrence">
          <span>{data.data.ocurrenceDay}</span>
        </p>
        {workshopContent(data.data.purpouse)}
        <p className="workshop__details--link">
          <NavLink to={`/2a-jornada/workshops/${data.data.id}`}>
            ver detalles del taller
          </NavLink>
        </p>
      </main>
      <footer className="workshop__tags">
        {keywordsArray.map((keyword, index) => {
          return (
            <NavLink
              to="/keywords/"
              className="workshop__tags--item"
              key={index}
              onClick={() => context.setKeyword(keyword)}
            >
              <span>{keyword}</span>
            </NavLink>
          );
        })}
      </footer>
    </article>
  );
};

export default Card;
