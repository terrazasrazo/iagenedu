import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const VideoItem = ({ sessionTitle, sessionImg, sessionLink }) => {
  return (
    <div className="my-2 md:my-0">
      <NavLink to={sessionLink} className="text-center">
        <img
          src={`/images/sessions/${sessionImg}`}
          alt={sessionTitle}
          className="w-full"
        />
        <h4 className="bg-orange_unam text-white p-1 rounded-b-sm">
          {sessionTitle}
        </h4>
      </NavLink>
    </div>
  );
};

VideoItem.propTypes = {
  sessionTitle: PropTypes.string.isRequired,
  sessionImg: PropTypes.string.isRequired,
  sessionLink: PropTypes.string.isRequired,
};

export default VideoItem;
