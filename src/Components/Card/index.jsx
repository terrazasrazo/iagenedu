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

  return (
    <article className={`${level} m-6 shadow-sm bg-gray-50 rounded border-t-4 border-b relative pb-2`}>
       
        <header className="p-4 border-b">
          <h1 className="text-2xl mb-4">{data.data.title}</h1>
          {
            data.data.speakers?.map(speaker => {
              return <h4 className="text-right text-lg text-gray-800" key={speaker.id}>{speaker.name}</h4>
            })
          }
        </header>
        <main className="p-2 py-4 text-gray-700">
          <p className="text-right mb-4"><span className="rounded text-gray-50 text-sm p-2">{data.data.ocurrenceDay}</span></p>
          <p>{data.data.purpouse}</p>
          <p className="text-right"><NavLink to={`/i-jornada/workshops/${data.data.id}`} className="inline-block bg-orange_unam text-white my-2 p-2 rounded-md">ver detalles del taller</NavLink></p>
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
              <span className="bg-orange-900 text-white inline-block p-1 m-1 rounded text-sm">
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
