import { useState, useEffect } from "react";
import VideoItem from "../../Components/ProgramItem/videoItem";
import institutions from "../../Components/Institutions/institutions";

function IJornada() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6600/mainsessions/")
    // fetch("https://ada.bunam.unam.mx/iagen-api/workshopassistants")
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
      });
  }, []);

  return (
    <>
      <header className="sm:flex sm:flex-row mx-auto mt-4 lg:mt-0 justify-center">
        <div className="lg:w-1/4">
          <img
            src="/images/iagen-icon.svg"
            alt="Inteligencia Artificial Generativa en Educación"
            width={400}
            className="block md:mx-auto"
          />
        </div>
        <div className="px-6 text-center sm:text-left sm:pt-4 md:pt-6 lg:flex lg:flex-col lg:justify-center lg:w-1/2 xl:w-2/5 2xl:w-1/3">
          <h1 className="text-3xl font-bold">
            I JORNADA DE INTELIGENCIA
            <br />
            ARTIFICIAL GENERATIVA
            <br />
            EN EDUCACIÓN
            <br />
            UNAM 2023
          </h1>
          <h2 className="my-4 text-xl font-semibold">
            23 Y 24 DE OCTUBRE, EN LÍNEA
          </h2>
        </div>
      </header>
      <section className="lg:flex lg:flex-row p-10">
        <div className="">
          <h2 className="my-4 text-xl lg:text-2xl font-semibold">Propósito</h2>
          <p>
            Explorar los usos, posibilidades y posibles futuros de la IA
            generativa en la educación media superior y superior para su
            aplicación efectiva y ética.
          </p>
          <h2 className="my-4 text-xl lg:text-2xl font-semibold">
            Líneas temáticas
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Las IES y la IA generativa: posturas, retos, avances y
              lineamientos
            </li>
            <li>IA generativa para docentes y diseñadores curriculares</li>
            <li>Estudiantes y su uso de la IA generativa</li>
          </ul>
        </div>
      </section>
      <section
        id="institutions"
        className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center"
      >
        {institutions?.map((item, index) => {
          return (
            <div key={index} className="p-2 block">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.logo} alt={item.name} />
              </a>
            </div>
          );
        })}
      </section>
      <section>
        <section id="schedule" className="p-4">
          <h3 className="text-xl my-2 md:my-4 bg-orange_unam text-white p-2">
            Lunes 23 de octubre
          </h3>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {items?.filter((item) => item.ocurrenceDay === "Lunes 23 de octubre de 2023").map((session, index) => {
            return (
              <VideoItem
                key={index}
                session={session}
              />
            );
          })}
          </div>
          <h3 className="text-xl my-2 md:my-4 bg-orange_unam text-white p-2">
            Martes 24 de octubre
          </h3>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {items?.filter((item) => item.ocurrenceDay === "Martes 24 de octubre de 2023").map((session, index) => {
            return (
              <VideoItem
                key={index}
                session={session}
              />
            );
          })}
          </div>
        </section>
      </section>
    </>
  );
}

export default IJornada;
