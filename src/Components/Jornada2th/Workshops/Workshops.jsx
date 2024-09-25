import { useState, useEffect } from "react";
import Card from "../../Card";
import "./Workshops.css";

const Workshops = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/workshopassistants`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        setFilteredItems(data)
      });
  }, []);

  return (
    <>
      <section className="w-full">
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
              onClick={() => {setFilteredItems(items?.filter((item) => item.ocurrenceDay === "Jueves 14 de noviembre de 2024"))}}
            >
              Jueves 14 de noviembre
        </a>
            <a
              className="cursor-pointer py-1 px-2 rounded inline-block my-1 bg-cyan-800 hover:bg-cyan-900 text-white text-sm mr-2"
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
      <section className="container sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {filteredItems?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </section>
    </>
  );
}

export default Workshops;
