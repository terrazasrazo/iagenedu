import PropTypes from "prop-types";
import "./SessionItem.css";

const SessionItem = ({ session }) => {
  return (
    <>
      <h2 className="text-3xl bg-orange_unam text-white p-2 rounded-sm mb-4">
        {session.title}
      </h2>
      <p className="text-right mb-8 text-orange-800 underline">{session.ocurrenceDay}</p>
      <div className="video mb-10 lg:my-20">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${session.youTubeurl}`}
          title={session.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

SessionItem.propTypes = {
  session: PropTypes.object.isRequired,
};

export default SessionItem;
