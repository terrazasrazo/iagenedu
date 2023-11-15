import PropTypes from "prop-types";

const BioItem = ({ bio }) => {
  return (
    <div className="my-4">
      <div>
        <img
          src={`/images/bios/${bio.photo}`}
          alt={bio.name}
          className="mx-auto w-32 rounded-full"
        />
      </div>
      <div className="-mt-10 mx-10 pt-12 pb-4 bg-white rounded text-center shadow-lg">
        <h3 className="bg-white px-1 text-orange_unam text-lg font-semibold">
          {bio.name}
        </h3>
        <h4 className="text-gray-500 text-md">{bio.dependence}</h4>
        <div className="mt-4">
          {bio.googleScholar && (
            <a href={`https://scholar.google.com/citations?user=${bio.googleScholar}&hl=es`} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-gray-700 mx-2">
              <i className="fa-brands fa-google"></i>
            </a>
          )}
          {bio.researchGate && (
            <a
              href={`https://www.researchgate.net/profile/${bio.researchGate}`} target="_blank" rel="noreferrer"	
              className="text-blue-500 hover:text-gray-700 mx-2"
            >
              <i className="fa-brands fa-researchgate"></i>
            </a>
          )}
          {bio.profile && (
            <a
              href={bio.profile} target="_blank" rel="noreferrer"
              className="text-blue-500 hover:text-gray-700 mx-2"
            >
              <i className="fa-solid fa-building-columns"></i>
            </a>
          )}
          {bio.twitter && (
            <a
              href={`https://twitter.com/${bio.twitter}`} target="_blank" rel="noreferrer"
              className="text-blue-500 hover:text-gray-700 mx-2"
            >
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

BioItem.propTypes = {
  bio: PropTypes.object.isRequired,
};

export default BioItem;
