import { useState, useEffect } from "react";
import interestingResources from "./resources";
import ResourceItem from "../../Components/ResourceItem/ResourceItem";
import "./InterestingResources.css";

function InterestingResources() {
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    setItems(interestingResources);
    setFilteredItems(interestingResources);
  }, []);

  const filterResources = (filterType) => {
    if (filterType === "") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items?.filter((item) => item.resourceType === filterType)
      );
    }
  };

  return (
    <>
      <section className="resources">
        <header className="resources__header">
          <h2>
            Recursos sobre IA Generativa en Educación
          </h2>
        </header>
        <section className="resources__filters">
          <p className="resources__filters--label">Filtrar por:</p>
          <p className="resources__filters--tags">
            <a
              onClick={() => filterResources("Artículo")}
              className="resources__filters--tags-item bg-lime-500"
            >
              Artículo
            </a>
            <a
              onClick={() => filterResources("Curso")}
              className="resources__filters--tags-item bg-emerald-500"
            >
              Curso
            </a>
            <a
              onClick={() => filterResources("Herramientas")}
              className="resources__filters--tags-item bg-teal-500"
            >
              Herramientas
            </a>
            <a
              onClick={() => filterResources("Lineamientos")}
              className="resources__filters--tags-item bg-cyan-500"
            >
              Lineamientos
            </a>
            <a
              onClick={() => filterResources("Sitio web")}
              className="resources__filters--tags-item bg-sky-500"
            >
              Sitio web
            </a>
            <a
              onClick={() => filterResources("Tutorial")}
              className="resources__filters--tags-item bg-blue-500"
            >
              Tutorial
            </a>
            <a
              onClick={() => filterResources("Video")}
              className="resources__filters--tags-item bg-indigo-500"
            >
              Video
            </a>
            <a
              onClick={() => filterResources("Otro")}
              className="resources__filters--tags-item bg-violet-500"
            >
              Otro
            </a>
            <a
              onClick={() => filterResources("")}
              className="resources__filters--tags-item bg-gray-500"
            >
              Todos los recursos
            </a>
          </p>
        </section>
        <section className="resources__list">
          {filteredItems?.map((resource, index) => {
            return (
              <ResourceItem key={index} item={resource} />
            );
          })}
        </section>
      </section>
    </>
  );
}

export default InterestingResources;
