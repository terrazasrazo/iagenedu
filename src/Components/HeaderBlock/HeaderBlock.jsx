import { NavLink } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import "./HeaderBlock.css";

function HeaderBlock() {
  const showMobileMenu = () => {
    const mobileMenu = document.getElementsByClassName("nav__mobile")[0];
    const mobileMenuClasses = mobileMenu.classList;
    mobileMenuClasses.remove("hidden");
  };

  return (
    <header>
      <nav aria-label="Global">
        <div className="nav__logo">
          <NavLink to="/">
            <span className="sr-only">IAGen en Educación UNAM</span>
            <img
              src="/images/iagen-unam.png"
              alt="IAGen en Educación UNAM"
              height={80}
            />
          </NavLink>
        </div>
        <div className="nav__mobile--button">
          <button
            type="button"
            className="nav__mobile--button-button"
            onClick={showMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="nav__mobile--button-icon"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <DesktopMenu />
      </nav>
      <MobileMenu />
    </header>
  );
}

export default HeaderBlock;
