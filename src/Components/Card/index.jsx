import { NavLink } from "react-router-dom";
import './Card.css'

const Card = (data) => {
  let level = ''
  if(data.data.level === 1) level = 'basic'
  if(data.data.level === 2) level = 'intermediate'
  if(data.data.level === 3) level = 'advanced'
  return (
    <article className={`${level} m-6 shadow-sm bg-gray-50 rounded border-t-4 relative pb-20`}>
      <NavLink to={`/iagenedu/workshops/${data.data.id}`}>
        <header className="p-4 border-b">
          <h1 className="text-2xl mb-4">{data.data.title}</h1>
          {
            data.data.speakers?.map(speaker => {
              return <h4 className="text-right text-lg text-gray-800" key={speaker.id}>{speaker.name}</h4>
            })
          }
        </header>
        <main className="p-2 py-4 text-gray-700">
          <p>{data.data.purpouse}</p>
        </main>
        <footer className="text-gray-100 p-2 rounded-b absolute bottom-0 w-full">
          <p className="text-xs">{data.data.keywords}</p>
        </footer>
      </NavLink>
    </article>
  );
};

export default Card;
