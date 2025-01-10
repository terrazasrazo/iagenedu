import { NavLink } from "react-router-dom";
// import SessionBlock from "./SessionBlock";

const DesktopMenu = () => {
  return (
    <>
      <div className="nav__desktop">
        <NavLink to="/2a-jornada/" className="nav__desktop--item">
          Programa
        </NavLink>
        <NavLink to="/2a-jornada/workshops" className="nav__desktop--item">
          Talleres
        </NavLink>
        <a href="https://iagenedu.unam.mx/resources" className="nav__desktop--item">Recursos</a>
        <a href="https://iagenedu.unam.mx/recomendaciones" className="nav__desktop--item">Recomendaciones</a>
      </div>
    </>
  );
};

export default DesktopMenu;
