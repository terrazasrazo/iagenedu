import { useState, useEffect } from "react";
import interestingResources from "./resources";

function InterestingResources() {
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    setItems(interestingResources);
    setFilteredItems(interestingResources);
  }, []);

  const resourceTypeColor = (resourceType) => {
    switch (resourceType) {
      case "Artículo":
        return "bg-lime-500";
      case "Curso":
        return "bg-emerald-500";
      case "Herramientas":
        return "bg-teal-500";
      case "Lineamientos":
        return "bg-cyan-500";
      case "Sitio web":
        return "bg-sky-500";
      case "Tutorial":
        return "bg-blue-500";
      case "Video":
        return "bg-indigo-500";
      default:
        return "bg-violet-500";
    }
  };

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
      <section className="p-4">
        <header>
          <h1 className="text-orange_unam text-3xl mb-8">
            Recursos interesantes sobre IA Generativa en Educación
          </h1>
        </header>
        <section className="border-b border-gray-300">
          <p className="text-lg">Filtrar por:</p>
          <p className="pt-2 py-4">
            <a
              onClick={() => filterResources("Artículo")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-lime-500"
            >
              Artículo
            </a>
            <a
              onClick={() => filterResources("Curso")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-emerald-500"
            >
              Curso
            </a>
            <a
              onClick={() => filterResources("Herramientas")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-teal-500"
            >
              Herramientas
            </a>
            <a
              onClick={() => filterResources("Lineamientos")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-cyan-500"
            >
              Lineamientos
            </a>
            <a
              onClick={() => filterResources("Sitio web")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-sky-500"
            >
              Sitio web
            </a>
            <a
              onClick={() => filterResources("Tutorial")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-blue-500"
            >
              Tutorial
            </a>
            <a
              onClick={() => filterResources("Video")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-indigo-500"
            >
              Video
            </a>
            <a
              onClick={() => filterResources("Otro")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-violet-500"
            >
              Otro
            </a>
            <a
              onClick={() => filterResources("")}
              className="inline-block cursor-pointer py-1 px-2 mx-1 mb-1 rounded text-white bg-gray-500"
            >
              Todos los recursos
            </a>
          </p>
        </section>
        <section className="mt-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-8">
          {filteredItems?.map((resource, index) => {
            return (
              <article
                key={index}
                className="bg-slate-50 border border-gray-300 rounded my-2 md:my-0 p-2"
              >
                <h2 className="text-xl text-orange_unam drop-shadow-sm pb-1 mb-4 border-b border-orange_unam">
                  {resource.resourceTitle}
                </h2>
                <p className="text-right">
                  <span
                    className={`${resourceTypeColor(
                      resource.resourceType
                    )} text-white py-1 px-2 rounded-tl rounded-bl -mr-2`}
                  >
                    {resource.resourceType}
                  </span>
                </p>
                <p className="mt-4">
                  {resource.keywords.map((keyword, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block bg-amber-600 text-white text-xs py-1 px-2 rounded m-1"
                      >
                        {keyword}
                      </span>
                    );
                  })}
                </p>
                <p className="text-right border-t border-orange_unam mt-4 pt-2">
                  <a
                    href={resource.resourceURL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-800 text-white py-1 px-2 rounded"
                  >
                    Ir al recurso
                  </a>
                </p>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default InterestingResources;
