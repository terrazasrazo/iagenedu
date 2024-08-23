import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ResourceItem from "../ResourceItem/ResourceItem";
import resources from "../../Pages/InterestingResources/resources";
import "./LastResourcesBlock.css";

function LastResourcesBlock() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const lastFourRecords = resources.slice(-4);
    setData(lastFourRecords);
  }, []);

  return (
    <section className="lastresources">
      <header className="lastresources__header">
        <h2>Recursos más recientes</h2>
      </header>
      <div className="lastresources__content">
        {data.map((item, index) => {
          return <ResourceItem key={index} item={item} />;
        })}
      </div>
      <footer className="lastresources__footer">
        <NavLink to="/resources" className="lastresources__footer--link">
          Ver todos los recursos <span aria-hidden="true">&rarr;</span>
        </NavLink>
      </footer>
    </section>
  );
}

export default LastResourcesBlock;
