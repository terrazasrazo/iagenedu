const ResourceItem = (resource) => {
  let resourceTypeColor = "";

  switch (resource.resource.resourceType) {
    case "Artículo": {
      resourceTypeColor = "bg-lime-500";
      break;
    }
    case "Curso": {
      resourceTypeColor = "bg-emerald-500";
      break;
    }
    case "Herramientas": {
      resourceTypeColor = "bg-teal-500";
      break;
    }
    case "Lineamientos": {
      resourceTypeColor = "bg-cyan-500";
      break;
    }
    case "Sitio web": {
      resourceTypeColor = "bg-sky-500";
      break;
    }
    case "Tutorial": {
      resourceTypeColor = "bg-blue-500";
      break;
    }
    case "Video": {
      resourceTypeColor = "bg-indigo-500";
      break;
    }
    default: {
      resourceTypeColor = "bg-violet-500";
      break;
    }
  }

  const keywordsArray = resource.resource.keywords.split(",");

  return (
    <article>
      <div>
        <img
          src={`/images/resources/${resource.resource.resourceImage}`}
          alt={resource.resource.resourceTitle}
        />
      </div>
      <div className="col-span-2">
        <header className="border-b-2">
          <h4>{resource.resource.resourceTitle}</h4>
        </header>
        <main className="p-2">
          <p className="-ml-2 -mt-2">
            <span
              className={`${resourceTypeColor} inline-block text-white p-1 rounded`}
            >
              {resource.resource.resourceType}
            </span>
          </p>
          <p className="text-right -mt-6">
            <a
              href={resource.resource.resourceURL}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-orange_unam text-white p-2 rounded-md"
            >
              ir al recurso
            </a>
          </p>
        </main>
        <footer>
          {keywordsArray.map((keyword, index) => {
            return <span key={index}>{keyword}</span>;
          })}
        </footer>
      </div>
    </article>
  );
};

export default ResourceItem;
