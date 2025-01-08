import { NavLink } from "react-router-dom";
// import SessionBlock from "./SessionBlock";

const DesktopMenu = () => {
  const showJornadas = () => {
    const jornadasMenu = document.querySelector(
      ".nav__desktop--collapsible-container"
    );
    const jornadasClasses = jornadasMenu.classList;
    jornadasClasses.remove("hidden");
    jornadasClasses.add("absolute");
    console.log("showJornadas");
  };

  const hideJornadas = () => {
    const jornadasMenu = document.querySelector(
      ".nav__desktop--collapsible-container"
    );
    const jornadasClasses = jornadasMenu.classList;
    setTimeout(() => {
      jornadasClasses.remove("absolute");
      jornadasClasses.add("hidden");
    }, 200);
  };

  return (
    <>
      <div className="nav__desktop">
        <div className="nav__desktop--collapsible">
          <button
            type="button"
            className="nav__desktop--collapsible-button"
            aria-expanded="false"
            onMouseEnter={showJornadas}
            onClick={showJornadas}
          >
            Jornadas
            <svg
              className="nav__desktop--collapsible-button-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className="nav__desktop--collapsible-container hidden"
            onMouseLeave={hideJornadas}
          >
            <div className="nav__desktop--collapsible-container-content">
              <div className="nav__desktop--collapsible-container-content-item group">
                <div className=".nav__desktop--collapsible-container-content-item-icon p-2 rounded-lg bg-iagen_bluehover group-hover:bg-iagen_blue">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m14.712 2.289-.087-.078a1 1 0 0 0-1.327.078l-.078.087a.999.999 0 0 0 .078 1.326l1.299 1.297H8.999l-.24.004A6.997 6.997 0 0 0 2 11.993c0 1.445.438 2.788 1.189 3.899a.999.999 0 0 0 1.626-1.163l-.135-.218A4.997 4.997 0 0 1 9 6.998h5.595l-1.297 1.297-.078.087a.999.999 0 0 0 1.492 1.326l3.006-3.003.077-.087a.999.999 0 0 0-.078-1.326l-3.005-3.003Zm6.075 5.771A.999.999 0 0 0 19 8.677c0 .209.064.402.172.561a4.997 4.997 0 0 1-4.17 7.75H9.414l1.294-1.29.083-.096a1 1 0 0 0-.006-1.23l-.077-.088-.095-.084a1.001 1.001 0 0 0-1.232.006l-.088.078-3.005 3.003-.083.095a1 1 0 0 0 .006 1.231l.077.087 3.005 3.003.095.084a1 1 0 0 0 1.397-1.41l-.077-.087-1.304-1.303h5.596l.24-.003a6.997 6.997 0 0 0 5.546-10.927v.003Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </div>
                <div className="nav__desktop--collapsible-container-content-item-label">
                  <a
                    href="https://iagenedu.unam.mx/i-jornada/"
                    className="nav__desktop--collapsible-container-content-item-label-link"
                  >
                    I Jornada
                  </a>
                  <p className="nav__desktop--collapsible-container-content-item-label-date">
                    23 y 24 de octubre 2023
                  </p>
                </div>
              </div>
              <div className="nav__desktop--collapsible-container-content-item group">
                <div className=".nav__desktop--collapsible-container-content-item-icon p-2 rounded-lg bg-iagen_magenta">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m10.429 19.924 3.562-1.512a1.999 1.999 0 0 1-3.562 1.512Zm5.432-17.83c2.086 1.14 3.652 2.603 4.682 4.387 1.03 1.784 1.515 3.872 1.459 6.248a.75.75 0 0 1-1.5-.035c.05-2.112-.372-3.928-1.258-5.463-.886-1.535-2.249-2.808-4.102-3.82a.75.75 0 1 1 .72-1.317Zm-9.15 4.421a5.824 5.824 0 0 1 7.6 2.746l.098.21 1.288 2.891 1.698 1.47c.093.08.173.174.266.325l.059.114a1.25 1.25 0 0 1-.637 1.65L6.755 20.49A1.25 1.25 0 0 1 5 19.347l-.001-2.343-1.242-2.792A5.822 5.822 0 0 1 6.71 6.515Zm8.913-.82c.967.527 1.742 1.294 2.316 2.289.574.995.851 2.05.824 3.15a.75.75 0 1 1-1.5-.036c.02-.822-.185-1.605-.623-2.364-.438-.76-1.014-1.33-1.735-1.722a.75.75 0 0 1 .718-1.317Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </div>
                <div className="nav__desktop--collapsible-container-content-item-label">
                <a
                    href="https://iagenedu.unam.mx/2a-jornada/"
                    className="nav__desktop--collapsible-container-content-item-label-link"
                  >
                    2<sup>a</sup> Jornada
                  </a>
                  <p className="nav__desktop--collapsible-container-content-item-label-date">
                    14 y 15 de noviembre <strong>2024</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/resources" className="nav__desktop--item">
          Recursos
        </NavLink>
        <NavLink to="/recomendaciones" className="nav__desktop--item">
          Recomendaciones
        </NavLink>
      </div>
      {
      //<SessionBlock legacyClass="nav__desktop--session" />
      }
    </>
  );
};

export default DesktopMenu;
