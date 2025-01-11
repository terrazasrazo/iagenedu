import { useState, useEffect } from "react";
import Card from "../../Components/Card";

function Workshops() {
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    fetch("https://ada.bunam.unam.mx/iagen-api/workshops2023")
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        setFilteredItems(data)
      });
  }, []);

  return (
    <>
      <section className="w-full p-4">
        <div className="bg-white p-4 shadow-sm rounded md:grid md:grid-cols-2">
          <div>
          <p className="text-sm mb-2">
            Filtrar por nivel de conocimiento de IAGen que se requiere para el
            taller:
          </p>
          <p>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-blue-400 hover:bg-blue-500 text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.level === 1))}}
            >
              Elemental
            </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-blue-600 hover:bg-blue-700 text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.level === 2))}}
            >
              Intermedio
            </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-blue-900 hover:bg-blue-950 text-white text-sm mr-2"
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
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-cyan-600 hover:bg-cyan-700 text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.ocurrenceDay === "Lunes 23 de octubre 2023"))}}
            >
              Lunes 23 de octubre
            </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-cyan-800 hover:bg-cyan-900 text-white text-sm mr-2"
              onClick={() => {setFilteredItems(items?.filter((item) => item.ocurrenceDay === "Martes 24 de octubre 2023"))}}
            >
              Martes 24 de octubre
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
        <div className="mt-4 text-right">
          <a
            href="https://www.coursera.org/learn/iagen"
            target="_blank"
            rel="noreferrer"
            className="inline-block max-w-lg"
          >
            <img
              src="/i-jornada/images/banner-iagen.png"
              alt="IA generativa en el aula"
              className="rounded"
            />
          </a>
        </div>
      </section>

      <section className="container sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {filteredItems?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </section>
    </>
  );
}

export default Workshops;
