import PropTypes from "prop-types";
import "./ResourceItem.css";

function ResourceItem({ item, index }) {
  const resourceTypeColor = (resourceType) => {
    switch (resourceType) {
      case "Artículo":
        return "bg-lime-500";
      case "Curso":
        return "bg-emerald-500";
      case "Herramientas":
        return "bg-teal-500";
      case "Lineamientos":
        return "bg-cyan-500";
      case "Sitio web":
        return "bg-sky-500";
      case "Tutorial":
        return "bg-blue-500";
      case "Video":
        return "bg-indigo-500";
      default:
        return "bg-violet-500";
    }
  };

  return (
    <article key={index} className="resource">
      <a href={item.resourceURL} target="_blank" rel="noreferrer">
        <h3 className="resource--title">
          {item.resourceTitle}
        </h3>
        <p className="text-right">
          <span
            className={`${resourceTypeColor(
              item.resourceType
            )} resource--type`}
          >
            {item.resourceType}
          </span>
        </p>
        <p className="resoure--keywords">
          {item.keywords.map((keyword, index) => {
            return (
              <span
                key={index}
                className="resource--keywords-item"
              >
                {keyword}
              </span>
            );
          })}
        </p>
      </a>
    </article>
  );
}

ResourceItem.propTypes = {
  item: PropTypes.shape({
    resourceTitle: PropTypes.string.isRequired,
    resourceType: PropTypes.string.isRequired,
    resourceURL: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ResourceItem;
