import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/iagenedu">Home</NavLink>
        </li>
        <li>
          <NavLink to="/iagenedu/workshops">Workshops</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
