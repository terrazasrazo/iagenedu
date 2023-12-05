import { NavLink } from "react-router-dom";

const WorkshopItem = (workshop) => {
  let level, levelColor = ''
  if(workshop.workshop.level === 1) {
    level = 'Intermedio'
    levelColor = 'basic'
  } level = 'Elemental'
  if(workshop.workshop.level === 2){
    level = 'Intermedio'
    levelColor = 'intermediate'
  }
  if(workshop.workshop.level === 3) {
    level = 'Avanzado'
    levelColor = 'advanced'
  }

  const keywordsArray = workshop.workshop.keywords.split(",");

  return (
    <article className="p-4 grid grid-cols-3">
      <div>
        <img
          src={`/images/workshops/default.jpg`}
          alt={workshop.workshop.title}
        />
      </div>
      <div className="col-span-2">
        <header className="border-b-2">
          <h4>{workshop.workshop.title}</h4>
        </header>
        <main className="p-2">
          <p className={`${levelColor} text-white text-right my-1 px-2 rounded-sm`}>{level}</p>
          <p className="text-right">
            <NavLink to={`/workshops/${workshop.workshop.id}`} target="_blank" className="inline-block bg-orange_unam text-white p-2 rounded-md">
              ver detalles del taller
            </NavLink>
          </p>
        </main>
        <footer className="text-right mt-2">
          {keywordsArray.map((keyword, index) => {
            return (
              <span
                key={index}
                className="inline-block bg-blue_unam m-1 text-white p-1 rounded-sm text-xs"
              >
                {keyword}
              </span>
            );
          })}
        </footer>
      </div>
    </article>
  );
};

export default WorkshopItem;
