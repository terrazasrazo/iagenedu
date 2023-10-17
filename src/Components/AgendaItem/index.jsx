import { NavLink } from "react-router-dom";
//import './AgendaItem.css'

const getLevel = (level) => {
  if (level === 1) return { text: "Elemental", class: "bg-blue-400" };
  if (level === 2) return { text: "Intermedio", class: "bg-blue-600" };
  if (level === 3) return { text: "Avanzado", class: "bg-blue-900" };
};

const AgendaItem = (data) => {
  return (
    <>
      <h3 className="text-xl text-orange_unam font-bold my-4">
        {data.data.ocurrenceDay}
      </h3>
      <article className="my-4 border border-gray-400 p-4">
        <div className="flex flex-row">
          <div className="w-1/5 flex flex-col justify-center">
            12:00 - 14:00
          </div>
          <div className="w-4/5">
            <h4 className="text-md">{data.data.title}</h4>
          </div>
        </div>
        <div className="border-t pt-2 mt-1 border-gray-400 relative">
        <p
            className={`${
              getLevel(data.data.level).class
            } p-1 text-white rounded-tl rounded-bl absolute -right-4 -top-2 text-sm inline-block`}
          >
            {getLevel(data.data.level).text}
          </p>
          <p className="text-sm text-gray-800 mt-4">{data.data.purpouse}</p>
        </div>
        <div className="border-t pt-2 mt-1 border-yellow-600">
          
          <NavLink
            to={`/workshops/${data.data.id}`}
            className="text-white bg-green-800 p-1 px-2 rounded mr-2 inline-block"
          >
            Detalle del taller
          </NavLink>
          <a
            href={data.data.zoomUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white bg-yellow-800 p-1 rounded px-2 inline-block"
          >
            Enlace sesión Zoom
          </a>
        </div>
      </article>
    </>
  );
};

export default AgendaItem;
