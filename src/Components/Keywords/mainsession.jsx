import { NavLink } from "react-router-dom";

const MainSessionItem = (session) => {
  const keywordsArray = session.session.keywords.split(",");

  return (
    <article className="p-4 grid grid-cols-3">
      <div>
        <img
          src={`/images/sessions/${session.session.sessionImage}.jpg`}
          alt={session.session.sessionTitle}
        />
      </div>
      <div className="col-span-2">
        <header className="border-b-2">
          <h4>{session.session.sessionTitle}</h4>
        </header>
        <main className="p-2">
          <p className="text-right">
            <NavLink to={`/i-jornada/${session.session.sessionImage}`} className="inline-block bg-orange_unam text-white p-2 rounded-md">
              ver la sesión
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

export default MainSessionItem;
