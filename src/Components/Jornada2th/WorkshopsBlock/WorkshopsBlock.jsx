import { useState } from "react";
import Card from "../../Card";
import "./Workshops.css";
import workshops from "../../../Pages/Workshops/Workshops.json";

const WorkshopsBlock = () => {
  const items = workshops;
  const [filteredItems, setFilteredItems] = useState(workshops);

  const compareWorkshops = (a, b) => {
    const dayA = a.ocurrenceDay || "";
    const dayB = b.ocurrenceDay || "";
    const dayCmp = dayA.localeCompare(dayB, "es", { sensitivity: "base" });
    if (dayCmp !== 0) return dayCmp;

    const levelA = Number(a.level ?? 0);
    const levelB = Number(b.level ?? 0);
    if (levelA !== levelB) return levelA - levelB;

    return (a.title || "").localeCompare(b.title || "", "es", { sensitivity: "base" });
  };

  return (
    <>
      <section className="workshops">
        <div className="workshops__filters">
          <div>
          <p className="text-sm mb-2">
            Filtrar por nivel de conocimiento de IAGen que se requiere para el
            taller:
          </p>
          <p>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-orange-200 hover:bg-orange-300 text-iagen_blue text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.level === 1))}}
            >
              Elemental
            </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-orange-400 hover:bg-orange-500 text-iagen_blue text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.level === 2))}}
            >
              Intermedio
            </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-orange-600 hover:bg-orange-700 text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.level === 3))}}
            >
              Avanzado
            </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-slate-500 hover:bg-slate-600 text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items)}}
            >
              Cualquier nivel
            </a>
          </p>
          </div>
          <div>
          <p className="text-sm mb-2 mt-4 md:mt-0">Filtrar por fecha:</p>
          <p>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-iagen_magenta hover:bg-iagen_magentahover text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.ocurrenceDay === "Jueves 14 de noviembre de 2024"))}}
            >
              Jueves 14 de noviembre
        </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-iagen_purple hover:bg-iagen_purplehover text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.ocurrenceDay === "Viernes 15 de noviembre de 2024"))}}
            >
              Viernes 15 de noviembre
            </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-slate-500 hover:bg-slate-600 text-white text-sm mr-2"
              onClick={() => setFilteredItems(items)}
            >
              Cualquier día
            </a>
          </p>
          </div>         
        </div>
      </section>
      <section className="announcement">
        <a href="https://padlet.com/innovacion_educativa1/galer-a-de-prompts-educativos-unam-f288ckj4t5sqjnsz" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.VITE_BASE_URL}images/workshops/padlet-prompts.jpg`} alt="Galería de Prompts educativos UNAM" />
        </a>
      </section>
      <section className="container sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {filteredItems?.slice().sort(compareWorkshops).map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </section>
    </>
  );
}

export default WorkshopsBlock;
