import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { KeywordContext } from "../../Context";

const VideoItem = ({ session }) => {
  const context = useContext(KeywordContext);
  const keywordsArray = session.keywords.split(",");

  return (
    <div className="my-2 md:my-0 bg-gray-50 border border-orange-300 rounded">
      <NavLink to={session.sessionImage} className="text-center">
        <img
          src={`/images/sessions/${session.sessionImage}.jpg`}
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
            <NavLink
              to="/keywords/"
              className="text-center"
              key={index}
              onClick={() => context.setKeyword(keyword)}
            >
              <span className="bg-orange-900 text-white inline-block p-1 m-1 rounded-sm text-sm">
                {keyword}
              </span>
            </NavLink>
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
