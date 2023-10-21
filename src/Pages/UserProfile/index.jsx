import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import AgendaItem from "../../Components/AgendaItem";
//import "./UserProfile.css";

const cookies = new Cookies();

const closeSession = () => {
  cookies.remove("id", { path: "/" });
  cookies.remove("name", { path: "/" });
  cookies.remove("lastname", { path: "/" });
  cookies.remove("email", { path: "/" });
  cookies.remove("worshopsCount", { path: "/" });
  window.location.href = "./";
};

const mainZoomUrl = "https://unam.zoom.us/j/87805377231?pwd=ak10WDNJTE12YVNydGlFa1J1N25tUT09";

const mondaySessions = [
  {
    time: "9:00",
    title: "Bienvenida e inauguración",
    zoomUrl: mainZoomUrl,
  },
  {
    time: "9:30",
    title: 'Mesa: "IA generativa para el aprendizaje"',
    zoomUrl: mainZoomUrl,
  },
  {
    time: "10:45",
    title: 'Mesa: "Experiencias educativas de IA generativa en la UNAM"',
    zoomUrl: mainZoomUrl,
  },
];

const tuesdaySessions = [
  {
    time: "9:00",
    title: 'Mesa: "Investigación en IAGen en la UNAM: su impacto educativo"',
    zoomUrl: mainZoomUrl,
  },
  {
    time: "10:00",
    title: 'Mesa: "IA generativa y evaluación: ¿se acabaron los exámenes?"',
    zoomUrl: mainZoomUrl,
  },
  {
    time: "11:00",
    title:
      'Mesa: "Futuros de la IA generativa en la UNAM: ¿viaje sin retorno?"',
    zoomUrl: mainZoomUrl,
  },
];

const buildSchedule = (sessions) => {
  return sessions.map((item, index) => {
    return (
      <article key={index} className="my-4 border border-gray-400 p-4">
        <div className="flex flex-row">
          <div className="w-1/5 flex flex-col justify-center">{item.time}</div>
          <div className="w-4/5">
            <h4 className="text-md">{item.title}</h4>
          </div>
        </div>
        <div className="border-t pt-2 mt-1 border-yellow-600">
          <a
            href={item.zoomUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white bg-yellow-800 p-1 rounded inline-block"
          >
            Enlace sesión Zoom
          </a>
        </div>
      </article>
    );
  });
};

function UserProfile() {
  const [agendaItems, setAgendaItems] = useState(null);

  useEffect(() => {
    fetch(
      `https://ada.bunam.unam.mx/iagen-api/users/agenda/${cookies.get("id")}`
    )
      .then((response) => response.json())
      .then((data) => setAgendaItems(data));
  }, []);

  return (
    <section id="user-profile" className="p-4">
      <div className="flex flex-row">
        <div className="w-2/3">
          <h1 className="text-3xl mb-4">
            Agenda de {`${cookies.get("name")}  ${cookies.get("lastname")}`}
          </h1>
        </div>
        <div className="w-1/3 text-right flex flex-col justify-center">
          <p className="mb-4">
            <a
              onClick={closeSession}
              className="bg-orange_unam p-2 rounded text-white text-sm cursor-pointer hover:bg-yellow_unam"
            >
              Cerrar sesión
            </a>
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-row">
        <section className="md:w-2/3">
          <h2 className="text-2xl">Sesiones principales</h2>
          <h3 className="text-xl text-orange_unam font-bold my-4">
            Lunes 23 de octubre de 2023
          </h3>
          {buildSchedule(mondaySessions)}
          {buildSchedule([
            {
              time: "16:00",
              title: "Presentaciones relámpago",
              zoomUrl: mainZoomUrl,
            },
          ])}
          <h3 className="text-xl text-orange_unam font-bold my-4">
            Martes 24 de octubre de 2023
          </h3>
          {buildSchedule(tuesdaySessions)}
          {buildSchedule([
            {
              time: "16:00",
              title: "Presentaciones relámpago",
              zoomUrl: mainZoomUrl,
            },
          ])}
          <h2 className="text-2xl mt-12 mb-4">Talleres</h2>
          <div id="workshops">
            {agendaItems &&
              agendaItems.map((item) => {
                return <AgendaItem key={item.id} data={item} />;
              })}
          </div>
        </section>
        <aside className="md:w-1/3"></aside>
      </div>
    </section>
  );
}

export default UserProfile;
