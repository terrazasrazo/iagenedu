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
      <h3 className="resource__title">{item.resourceTitle}</h3>
      <p className="text-right">
        <span
          className={`${resourceTypeColor(item.resourceType)} resource__type`}
        >
          {item.resourceType}
        </span>
      </p>
      <p className="resource__keywords">
        {item.keywords.map((keyword, index) => {
          return <span className="resource__keywords-item" key={index}>{keyword}</span>;
        })}
      </p>
      <p className="resource__link">
        <a
          href={item.resourceURL}
          target="_blank"
          rel="noreferrer"
          className="resource__link--item"
        >
          Ir al recurso
        </a>
      </p>
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
