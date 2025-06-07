import { NavLink } from "react-router-dom";

const MainSessionItem = (session) => {
  const keywordsArray = session.session.keywords.split(",");

  return (
    <article>
      <div>
        <img
          src={`${import.meta.env.VITE_BASE_URL}/images/sessions/${session.session.sessionImage}.jpg`}
          alt={session.session.sessionTitle}
        />
      </div>
      <div className="col-span-2">
        <header className="border-b-2">
          <h4>{session.session.sessionTitle}</h4>
        </header>
        <main className="p-2">
          <p className="text-right">
            <NavLink
              to={`/${session.session.sessionImage}`}
              target="_blank"
              className="inline-block bg-orange_unam text-white p-2 rounded-md"
            >
              ver la sesión
            </NavLink>
          </p>
        </main>
        <footer>
          {keywordsArray.map((keyword, index) => {
            return <span key={index}>{keyword}</span>;
          })}
        </footer>
      </div>
    </article>
  );
};

export default MainSessionItem;
