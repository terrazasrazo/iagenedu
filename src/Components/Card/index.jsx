import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { KeywordContext } from "../../Context";
import './Card.css'

const Card = (data) => {
  const context = useContext(KeywordContext);

  let level = ''
  if(data.data.level === 1) level = 'basic'
  if(data.data.level === 2) level = 'intermediate'
  if(data.data.level === 3) level = 'advanced'

  let availableSeats = data.data.participants - data.data.assistantsCount
  if(availableSeats < 0) availableSeats = 0

  const keywordsArray = data.data.keywords.split(",");

  const workshopContent = (content) => {
    const htmlContent = { __html: content };
    return <div dangerouslySetInnerHTML={htmlContent}></div>;
  };

  return (
    <article className={`${level} m-6 shadow-sm rounded border-t-8 border relative pb-2`}>
       
        <header className="p-4 border-b">
          <h1 className="text-2xl mb-4">{data.data.title}</h1>
          {
            data.data.speakers?.map(speaker => {
              return <h4 className="text-right text-lg text-gray-800" key={speaker.id}>{speaker.name}</h4>
            })
          }
        </header>
        <main className="p-2 py-4 text-iagen_lightgray">
          <p className="text-right mb-4"><span className="rounded text-gray-50 text-sm p-2">{data.data.ocurrenceDay}</span></p>
          {workshopContent(data.data.purpouse)}
          <p className="text-right"><NavLink to={`/2a-jornada/workshops/${data.data.id}`} className="inline-block bg-iagen_magenta hover:bg-iagen_magenta text-white my-2 p-2 rounded-md">ver detalles del taller</NavLink></p>
        </main>
        <footer className="tags">
        {keywordsArray.map((keyword, index) => {
          return (
            <NavLink
              to="/keywords/"
              className="text-center"
              key={index}
              onClick={() => context.setKeyword(keyword)}
            >
              <span className="bg-iagen_orange hover:bg-iagen_orangehover text-white inline-block p-1 m-1 rounded text-sm">
                {keyword}
              </span>
            </NavLink>
          );
        })}
      </footer>
    </article>
  );
};

export default Card;
