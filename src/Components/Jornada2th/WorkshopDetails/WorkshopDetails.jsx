import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./WorkshopDetails.css";
import Speaker from "../../Speaker/";

function WorkshopDetails() {
  const [items, setItems] = useState(0);
  const { workshopId } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/workshops/${workshopId}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [workshopId]);

  const workshopContent = (content) => {
    const htmlContent = { __html: content };
    return <div dangerouslySetInnerHTML={htmlContent}></div>;
  };

  return (
    <>
      {items &&
        items.map((item) => {
          let speakerLabel = "Tallerista";
          if (item.speakers.length > 1) speakerLabel = "Talleristas";

          let workshopLevel = "";
          if (item.level === 1) workshopLevel = "bg-blue-400";
          if (item.level === 2) workshopLevel = "bg-blue-600";
          if (item.level === 3) workshopLevel = "bg-blue-900";

          const keywordsArray = item.keywords.split(",");

          return (
            <section key={item.id} id="workshop-details">
              <article className="p-4">
                <header className="mb-4">
                  <h2
                    className={`text-3xl text-white p-2 rounded-sm ${workshopLevel}`}
                  >
                    {item.title}
                  </h2>
                </header>
                <main className="lg:flex lg:flex-row">
                  <section className="workshop-video">
                    <div className="video">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${item.youTubeurl}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </section>
                  <section className="workshop-data">
                    <section className="workshop-description">
                      <div>
                        <h3 className="text-2xl text-orange_unam my-2">
                          Propósito del taller
                        </h3>
                        {workshopContent(item.purpouse)}
                      </div>
                      <div id="workshop-content">
                        <h3 className="text-2xl text-orange_unam my-2">
                          Contenido del taller
                        </h3>
                        {workshopContent(item.themes)}
                      </div>
                      <div>
                        <h3 className="text-2xl text-orange_unam my-2">
                          Producto del taller
                        </h3>
                        {workshopContent(item.product)}
                      </div>
                    </section>
                    <aside className="border-t border-gray-400 lg:border-none mt-8 lg:mt-1 lg:pl-8">
                      <div>
                        <h4 className="text-xl text-orange-700 my-2">
                          Nivel educativo al que está dirigido
                        </h4>
                        <p>{item.educationLevel}</p>
                      </div>
                      <div>
                        <h4 className="text-xl text-orange-700 my-2">
                          Área de conocimiento que aborda
                        </h4>
                        <p>{item.knowledgeArea}</p>
                      </div>
                      <div id="workshop-tools">
                        <h4 className="text-xl text-orange-700 my-2">
                          Herramientas que se usarán en el taller
                        </h4>
                        {workshopContent(item.tools)}
                      </div>
                      <div>
                        <h4 className="text-xl text-orange-700 my-2">
                          Palabras clave
                        </h4>
                        <div>
                          {keywordsArray.map((keyword, index) => {
                            return (
                              <span
                                className="bg-orange-900 text-white inline-block p-1 m-1 rounded-sm text-sm"
                                key={index}
                              >
                                {keyword}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </aside>
                  </section>
                </main>
                <section>
                  <div className="mt-8 border-t border-gray-400">
                    <h3 className="text-2xl text-orange_unam my-2">
                      {speakerLabel}
                    </h3>
                    {item.speakers.map((speaker) => {
                      return <Speaker key={speaker.id} data={speaker} />;
                    })}
                  </div>
                  <div
                    id="workshop-references"
                    className="mt-8 border-t border-gray-400"
                  >
                    <h3 className="text-2xl text-orange_unam my-2">
                      Referencias
                    </h3>
                    <div className="text-sm leading-relaxed">
                      {workshopContent(item.references)}
                    </div>
                  </div>
                </section>
              </article>
            </section>
          );
        })}
    </>
  );
}

export default WorkshopDetails;
