import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import PropTypes from 'prop-types';

const SessionBlock = ({legacyClass}) => {
  const cookies = new Cookies();
  console.log(legacyClass);

  return (
    <div className={legacyClass}>
        {cookies.get("id") ? (
          <NavLink to="/user/profile" className="session__login--button">
            {cookies.get("name")} {cookies.get("lastname")}
          </NavLink>
        ) : (
          <NavLink to="/user/signin" className="session__login--button">
            Iniciar sesión <span aria-hidden="true">&rarr;</span>
          </NavLink>
        )}
      </div>
  )
}

SessionBlock.propTypes = {
  legacyClass: PropTypes.string.isRequired,
};

export default SessionBlock;
