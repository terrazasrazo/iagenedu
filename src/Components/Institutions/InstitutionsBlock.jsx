import "./Institutions.css";
import institutionsArray from "./institutions";

function InstitutionsBlock() {
  return (
    <section className="institutions">
      <header className="institutions__header">
        <h2>
          Entidades y dependencias que conforman<br />el Grupo de Trabajo de Inteligencia
          Artificial Generativa <br />en Educación de la UNAM
        </h2>
      </header>
      <article className="institutions__content">
        {institutionsArray?.map((item, index) => {
          return (
            <div key={index} className="institutions__content--item">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.logo} alt={item.name} />
              </a>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default InstitutionsBlock;
