import { NavLink } from "react-router-dom";
import './AgendaItem.css'

const getLevel = (level) => {
  if (level === 1) return {text: "Elemental", class: "text-blue-400"};
  if (level === 2) return {text: "Intermedio", class: "text-blue-600"};
  if (level === 3) return {text: "Avanzado", class: "text-blue-900"};
};

const AgendaItem = (data) => {
  return (
    <>
      <h3>{data.data.ocurrenceDay}</h3>
      <article>
        <h4>{data.data.title}</h4>
        <p>{data.data.purpouse}</p>
        <div className="flex flex-row items-center agenda-details">
          <div>
            <a
              href={data.data.zoomSession}
              target="_blank"
              rel="noreferrer"
              className="text-white bg-yellow-800 p-1 rounded"
            >Enlace sesión Zoom</a>
          </div>
          <div>
            <NavLink to={`/workshops/${data.data.id}`} className="text-white bg-green-800 p-1 rounded">
              Detalle del taller
            </NavLink>
          </div>
          <div>
            <p className={`bg-gray-200 ${getLevel(data.data.level).class} p-1 rounded`}>Nivel: {getLevel(data.data.level).text}</p>
          </div>
        </div>        
      </article>
    </>
  );
};

export default AgendaItem;
