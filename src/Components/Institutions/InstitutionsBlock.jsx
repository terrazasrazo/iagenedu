import "./Institutions.css";
import institutionsArray from "./institutions";

function InstitutionsBlock() {
  return (
    <section className="institutions">
      {institutionsArray?.map((item, index) => {
        return (
          <div key={index} className="institutions__item">
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.logo} alt={item.name} />
            </a>
          </div>
        );
      })}
    </section>
  );
}

export default InstitutionsBlock;