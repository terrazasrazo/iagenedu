import { NavLink } from "react-router-dom";
// import SessionBlock from "./SessionBlock";

const DesktopMenu = () => {
  return (
    <>
      <div className="nav__desktop">
        <NavLink to="/" className="nav__desktop--item">
          Programa
        </NavLink>
        <NavLink to="/workshops" className="nav__desktop--item">
          Talleres
        </NavLink>
        <NavLink to="/resources" className="nav__desktop--item">Recursos</NavLink>
      </div>
    </>
  );
};

export default DesktopMenu;
