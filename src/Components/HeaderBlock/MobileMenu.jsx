import { NavLink } from "react-router-dom";

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
  const mobileJornadas = document.querySelectorAll(
    ".nav__mobile--session_link-jornadas"
  );
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
            <div className="">
              <NavLink to="/2a-jornada/" className="nav__mobile--item">
                Programa
              </NavLink>
              <NavLink to="/2a-jornada/workshops" className="nav__mobile--item">
                Talleres
              </NavLink>
              <a
                href="https://iagenedu.unam.mx/resources"
                className="nav__mobile--item"
              >
                Recursos
              </a>
              <a
                href="https://iagenedu.unam.mx/recomendaciones"
                className="nav__mobile--item"
              >
                Recomendaciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
