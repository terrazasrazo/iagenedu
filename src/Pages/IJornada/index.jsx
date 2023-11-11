import VideoItem from "../../Components/ProgramItem/videoItem";
import institutions from "../../Components/Institutions/institutions";

const sessionsMonday = [
  {
    sessionTitle: "Bienvenida e inauguración",
    sessionImg: "bienvenida-inauguracion.jpg",
    sessionLink: "bienvenida-inauguracion",
  },
  {
    sessionTitle: "Mesa: IA generativa para el aprendizaje",
    sessionImg: "ia-generativa-aprendizaje.jpg",
    sessionLink: "ia-generativa-aprendizaje",
  },
  {
    sessionTitle: "Mesa: Experiencias educativas de IA generativa en la UNAM",
    sessionImg: "experiencias-ia-generativa-unam.jpg",
    sessionLink: "experiencias-ia-generativa-unam",
  },
  {
    sessionTitle: "Presentaciones relámpago",
    sessionImg: "presentaciones-relampago-lunes.jpg",
    sessionLink: "presentaciones-relampago-lunes",
  },
];

const sessionsTuesday = [
  {
    sessionTitle:
      "Mesa: Investigación en IAGen en la UNAM: su impacto educativo",
    sessionImg: "investigacion-iagen-unam.jpg",
    sessionLink: "investigacion-iagen-unam",
  },
  {
    sessionTitle:
      "Mesa: IA generativa y evaluación: ¿se acabaron los exámenes?",
    sessionImg: "ia-generativa-evaluacion.jpg",
    sessionLink: "ia-generativa-evaluacion",
  },
  {
    sessionTitle:
      "Mesa: Futuros de la IA generativa en la UNAM: ¿viaje sin retorno?",
    sessionImg: "futuros-ia-generativa-unam.jpg",
    sessionLink: "futuros-ia-generativa-unam",
  },
  {
    sessionTitle: "Presentaciones relámpago",
    sessionImg: "presentaciones-relampago-martes.jpg",
    sessionLink: "presentaciones-relampago-martes",
  },
  {
    sessionTitle: "Clausura",
    sessionImg: "clausura.jpg",
    sessionLink: "clausura",
  }
];

function IJornada() {
  return (
    <>
      <header className="sm:flex sm:flex-row mx-auto mt-4 lg:mt-0 justify-center">
        <div className="lg:w-1/4">
          <img
            src="/images/iagen-icon.svg"
            alt="Inteligencia Artificial Generativa en Educación"
            width={400}
            className="block md:mx-auto"
          />
        </div>
        <div className="px-6 text-center sm:text-left sm:pt-4 md:pt-6 lg:flex lg:flex-col lg:justify-center lg:w-1/2 xl:w-2/5 2xl:w-1/3">
          <h1 className="text-3xl font-bold">
            I JORNADA DE INTELIGENCIA
            <br />
            ARTIFICIAL GENERATIVA
            <br />
            EN EDUCACIÓN
            <br />
            UNAM 2023
          </h1>
          <h2 className="my-4 text-xl font-semibold">
            23 Y 24 DE OCTUBRE, EN LÍNEA
          </h2>
        </div>
      </header>
      <section className="lg:flex lg:flex-row p-10">
        <div className="">
          <h2 className="my-4 text-xl lg:text-2xl font-semibold">Propósito</h2>
          <p>
            Explorar los usos, posibilidades y posibles futuros de la IA
            generativa en la educación media superior y superior para su
            aplicación efectiva y ética.
          </p>
          <h2 className="my-4 text-xl lg:text-2xl font-semibold">
            Líneas temáticas
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Las IES y la IA generativa: posturas, retos, avances y
              lineamientos
            </li>
            <li>IA generativa para docentes y diseñadores curriculares</li>
            <li>Estudiantes y su uso de la IA generativa</li>
          </ul>
        </div>
      </section>
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
      <section>
        <section id="schedule" className="p-4">
          <h3 className="text-xl my-2 md:my-4 bg-orange_unam text-white p-2">
            Lunes 23 de octubre
          </h3>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {sessionsMonday.map((session, index) => {
            return (
              <VideoItem
                key={index}
                sessionTitle={session.sessionTitle}
                sessionImg={session.sessionImg}
                sessionLink={session.sessionLink}
              />
            );
          })}
          </div>
          <h3 className="text-xl my-2 md:my-4 md:mt-20 bg-orange_unam text-white p-2">
            Martes 24 de octubre
          </h3>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {sessionsTuesday.map((session, index) => {
            return (
              <VideoItem
                key={index}
                sessionTitle={session.sessionTitle}
                sessionImg={session.sessionImg}
                sessionLink={session.sessionLink}
              />
            );
          })}
          </div>
        </section>
      </section>
    </>
  );
}

export default IJornada;
