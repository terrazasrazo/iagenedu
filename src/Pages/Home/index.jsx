import { NavLink } from "react-router-dom";
import institutions from "../../Components/Institutions/institutions";

function Home() {
  return (
    <div id="home" className="p-4">
      <NavLink
        to="/resources/"
        className="absolute w-40 lg:w-60 right-0 top-28"
      >
        <img src="images/tour-recursos.png" alt="Recursos interesantes" />
      </NavLink>
      <header className="sm:flex sm:flex-row mt-24 lg:mt-0">
        <div className="sm:w-1/2 xl:w-1/3">
          <img
            src="images/iagen-logo.svg"
            alt="Inteligencia Artificial Generativa en Educación"
            width={600}
            className="block md:mx-auto"
          />
        </div>
        <div className="px-6 sm:pt-4 md:pt-6 lg:flex lg:flex-col lg:justify-center sm:w-1/2 xl:w-2/3 md:text-lg xl:text-xl">
          <p>
            Durante el transcurso de este año, la Universidad Nacional Autónoma
            de México (UNAM) ha documentado el interés de varias entidades y
            dependencias en el tema, de manera que el 14 de agosto de este año{" "}
            <span className="text-orange_unam font-semibold">
              se instaló formalmente un grupo de trabajo
            </span>{" "}
            sobre el uso de estas herramientas en docencia, con el fin de
            explorar el potencial de IAGen en enseñanza, aprendizaje y
            evaluación en la institución, así como organizar actividades
            relativas al tema y emitir recomendaciones que sean de utilidad para
            el profesorado de la universidad.
          </p>
          <p className="mt-4">Los primeros productos de este grupo son:</p>
          <ul className="list-disc ml-6 font-semibold text-orange_unam">
            <li><NavLink to="/i-jornada/" className="text-orange_unam hover:text-blue_unam underline">I Jornada de Inteligencia Artificial Generativa en Educación UNAM 2023</NavLink></li>
            <li><a href="/docs/recomendaciones_uso_iagen_docencia_unam_2023.pdf" target="_blank" rel="noopener noreferrer" className="text-orange_unam hover:text-blue_unam underline">Recomendaciones para el uso de la inteligencia artificial generativa en docencia</a></li>
          </ul>
        </div>
      </header>
      <section
        id="institutions"
        className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center"
      >
        {institutions?.map((item, index) => {
          return (
            <div key={index} className="p-2 block">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.logo} alt={item.name} />
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
