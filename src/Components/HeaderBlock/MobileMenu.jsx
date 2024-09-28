import { NavLink } from "react-router-dom";
import SessionBlock from "./SessionBlock";

const MobileMenu = () => {
  const closeMenu = () => {
    const mobileMenu = document.getElementsByClassName("nav__mobile")[0];
    const mobileMenuClasses = mobileMenu.classList;
    mobileMenuClasses.add("hidden");
  };

  const mobileLinks = document.querySelectorAll(".nav__mobile--session_link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  const mobileJornadas = document.querySelectorAll(".nav__mobile--session_link-jornadas");
  mobileJornadas.forEach((jornada) => {
    jornada.addEventListener("click", closeMenu);
  });

  return (
    <div className="nav__mobile hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-iagen_blue px-6 py-6">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-iagen_lightgrayhover">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 hover:bg-iagen_bluehover"
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    Jornadas
                    <svg
                      className="h-5 w-5 flex-none"
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
                  <div className="mt-2 space-y-2" id="disclosure-1">
                    <a
                      href="/i-jornada/"
                      className="nav__mobile--session_link-jornadas"
                    >
                      I Jornada
                    </a>
                    <NavLink
                      to="/2a-jornada"
                      className="nav__mobile--session_link-jornadas"
                    >
                      2<sup>a</sup> Jornada
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/resources"
                  className="nav__mobile--session_link"
                >
                  Recursos
                </NavLink>
                <NavLink
                  to="/recomendaciones"
                  className="nav__mobile--session_link"
                >
                  Recomendaciones
                </NavLink>
              </div>
              <SessionBlock legacyClass="nav__mobile--session" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default MobileMenu;
