import { useState, useEffect } from "react";
import Card from "../../Components/Card";

function Workshops() {
  const [items, setItems] = useState(null);
  const [filterLevel, setFilterLevel] = useState(null);
  const [filterDate, setFilterDate] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    fetch("https://ada.bunam.unam.mx/iagen-api/workshopassistants")
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        setFilteredItems(data)
      });
  }, []);

  const getFilteredItems = (level,date) => {
    console.log(level,date)
    if(level === "" && date === "") {
      console.log("entra vacío")
      setFilteredItems(items);
    } else {
      if(level !== "") {
        console.log("entra nivel")
        setFilteredItems(items?.filter((item) => item.level === level));
      } else {
        setFilteredItems(items);
      }
      if(filterDate !== "") {
        setFilteredItems(items?.filter((item) => item.ocurrenceDay === filterDate));
      } else {
        setFilteredItems(items);
      }
    }
  };

  return (
    <>
      <section className="w-full p-4 flex flex-col md:flex-row">
        <div className="order-last md:order-1 bg-white p-4 shadow-sm rounded md:w-1/2">
          <p className="text-orange-800">
            Los talleres ocurrirán de manera simultánea de 12:00 a 14:00 horas.
          </p>
          <p className="mt-2 text-sm text-orange-600">
            * Las grabaciones de los talleres estarán disponibles en esta misma
            plataforma después del evento.
          </p>
          <p className="mt-6 border-t border-gray-300 pt-2 mb-2">
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
          <p className="mt-4 mb-2">Filtrar por fecha:</p>
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
        <div className="order-1 md:order-last md:w-1/2 md:flex md:flex-col xl:flex-row md:justify-center xl:justify-end md:pl-2 text-right">
          <a
            href="https://www.coursera.org/learn/iagen"
            target="_blank"
            rel="noreferrer"
            className="inline-block max-w-lg"
          >
            <img
              src="/images/iagen-coursera.jpeg"
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
