import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import AgendaItem from "../../Components/AgendaItem";
import "./UserProfile.css";

const cookies = new Cookies();

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
    <section id="user-profile">
      <h1>Agenda de {`${cookies.get("name")}  ${cookies.get("lastname")}`}</h1>
      <h2>Sesiones principales</h2>
      <h3>Lunes 23 de octubre de 2023</h3>
      <article className="my-4 border p-4 rounded">
        <ul>
          <li>Bienvenida e inauguración</li>
          <li>Mesa: "IA generativa para el aprendizaje"</li>
          <li>Mesa: "Experiencias educativas de IA generativa en la UNAM"</li>
        </ul>
        <div className="border-t pt-2 mt-1 border-gray-300">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-white bg-yellow-800 p-1 rounded"
        >Enlace sesión Zoom</a>
        </div>
      </article>
      <article className="my-4 border p-4 rounded">
        <ul>
          <li>Presentaciones relámpago</li>
        </ul>
        <div className="border-t pt-2 mt-1 border-gray-300">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-white bg-yellow-800 p-1 rounded"
        >Enlace sesión Zoom</a>
        </div>
      </article>
      <h3>Martes 24 de octubre de 2023</h3>
      <article className="my-4 border p-4 rounded">
        <ul>
          <li>Mesa: "Investigación en IAGen en la UNAM: su impacto educativo"</li>
          <li>Mesa: "IA generativa y evaluación: ¿se acabaron los exámenes?"</li>
          <li>Mesa: "Futuros de la IA generativa en la UNAM: ¿viaje sin retorno?"</li>
        </ul>
        <div className="border-t pt-2 mt-1 border-gray-300">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-white bg-yellow-800 p-1 rounded"
        >Enlace sesión Zoom</a>
        </div>
      </article>
      <article className="my-4 border p-4 rounded">
        <ul>
          <li>Presentaciones relámpago</li>
        </ul>
        <div className="border-t pt-2 mt-1 border-gray-300">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-white bg-yellow-800 p-1 rounded"
        >Enlace sesión Zoom</a>
        </div>
      </article>
      <h2>Talleres</h2>
      <section id="workshops">
      {agendaItems &&
        agendaItems.map((item) => {
          return <AgendaItem key={item.id} data={item} />;          
        })
      }
      </section>
    </section>
  );
}

export default UserProfile;
