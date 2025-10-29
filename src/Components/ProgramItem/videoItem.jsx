import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const VideoItem = ({ session }) => {
  const keywordsArray = session.keywords.split(",");

  return (
    <div className="my-2 md:my-0 bg-gray-50 border border-orange-300 rounded">
      <NavLink to={session.sessionImage} className="text-center">
        <img
          src={`${import.meta.env.VITE_BASE_URL}images/sessions/${
            session.sessionImage
          }.jpg`}
          alt={session.sessionTitle}
          className="w-full"
        />
        <h4 className="bg-orange_unam text-white p-1 mb-2">
          {session.sessionTitle}
        </h4>
      </NavLink>
      <footer className="tags">
        {keywordsArray.map((keyword, index) => {
          return (
            <span
              key={index}
              className="bg-orange-900 text-white inline-block p-1 m-1 rounded-sm text-sm"
            >
              {keyword}
            </span>
          );
        })}
      </footer>
    </div>
  );
};

VideoItem.propTypes = {
  session: PropTypes.object.isRequired,
};

export default VideoItem;
