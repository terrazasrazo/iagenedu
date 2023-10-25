import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import ProgramItem from "../../Components/ProgramItem";
// import "./Home.css";

const cookies = new Cookies();

const institutions = [
  {
    name: "CECAv",
    logo: "images/logo-cecav.png",
    url: "https://cecav.unam.mx/",
  },
  {
    name: "CUAIEED",
    logo: "images/logo-cuaieed.png",
    url: "https://cuaieed.unam.mx/",
  },
  {
    name: "DGBSDI",
    logo: "images/logo-dgbsdi.png",
    url: "https://www.dgb.unam.mx/",
  },
  {
    name: "DGTIC",
    logo: "images/logo-dgtic.png",
    url: "https://www.tic.unam.mx/",
  },
  {
    name: "FI",
    logo: "images/logo-fi.png",
    url: "https://www.ingenieria.unam.mx/",
  },
  {
    name: "ICAT",
    logo: "images/logo-icat.png",
    url: "https://www.icat.unam.mx/",
  },
  {
    name: "IER",
    logo: "images/logo-ier.png",
    url: "https://www.ier.unam.mx/",
  },
  {
    name: "IISUE",
    logo: "images/logo-iisue.png",
    url: "https://www.iisue.unam.mx/",
  },
];

const registerAnnouncement = () => {
  if (cookies.get("id") === undefined) {
    return (
      <NavLink
        to={`/register/`}
        className="bg-orange_unam hover:bg-orange-800 text-white inline-block py-1 px-2 rounded"
      >
        Registro como participante
      </NavLink>
    );
  }
};

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
        <div className="xl:w-1/3">
          <img
            src="images/iagen-icon.svg"
            alt="Inteligencia Artificial Generativa en Educación"
            width={600}
            className="block md:mx-auto"
          />
        </div>
        <div className="px-6 text-center sm:text-left sm:pt-4 md:pt-6 lg:flex lg:flex-col lg:justify-center xl:w-2/3">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
            I JORNADA DE INTELIGENCIA
            <br />
            ARTIFICIAL GENERATIVA
            <br />
            EN EDUCACIÓN
            <br />
            UNAM 2023
          </h1>
          <h2 className="my-4 text-xl md:text-2xl xl:text-4xl font-semibold">
            23 Y 24 DE OCTUBRE, EN LÍNEA
          </h2>
        </div>
      </header>
      <section className="lg:flex lg:flex-row">
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
        <div className="border-t-2 lg:border-none mt-4 pt-2 lg:pt-40 border-orange_unam">
          <p>{registerAnnouncement()}</p>
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
        <header>
          <h2 className="my-4 text-xl lg:text-2xl font-semibold">Programa</h2>
        </header>
        <section id="schedule" className="xl:flex xl:flex-row">
          <div className="xl:px-2 xl:w-1/2">
            <h3 className="text-xl my-2 bg-orange_unam text-white p-2">
              Lunes 23 de octubre
            </h3>
            <div className="mb-6 xl:mb-4 border border-gray-400 p-2 grid gap-4 content-center grid-cols-3 md:grid-cols-5">
              <div className="grid content-center pl-10">
                <p>9:00</p>
              </div>
              <div className="grid col-span-2 content-center text-center">
                <p>Bienvenida e inauguración</p>
              </div>
              <div className="col-span-3 md:col-span-2 border-t md:border-none border-gray-400 pt-2 md:pt-0 grid content-center">
                <p>
                  Dr. Melchor Sánchez (CUAIEED), Dr. Boris Escalante (CECAv),
                  Dr. Héctor Benítez (DGTIC) y Dr. José Manuel Saniger (CIC)
                </p>
              </div>
            </div>
            <ProgramItem
              hour="9:30"
              title={`Mesa: "IA generativa para el aprendizaje"`}
              description={`<p>Ponentes: Dra. Marina Kriscautzky (DGTIC), Dra. Janneth Trejo (IISUE), Dra. Jimena Olveres (CECAv), Dra. Guadalupe Vadillo (CUAIEED)</p><p class="text-sm text-gray-700">Moderadora: Dra. Jackeline Bucio (CUAIEED)</p> `}
            />
            <ProgramItem
              hour="10:45"
              title={`Mesa: "Experiencias educativas de IA generativa en la UNAM"`}
              description={`<p>Ponentes: Dr. Guillermo Barrios (IER), Dr. Gustavo de la Cruz (ICAT), Dr. Everardo Bárcenas (FI), Dr. Antonio Sánchez Pereyra (DGBSIE)</p><p class="text-sm text-gray-700">Moderador: Dr. Erik Carbajal-Degante (CUAIEED)</p>`}
            />
            <div className="mb-6 xl:mb-4 border border-gray-400 p-2 grid gap-4 content-center grid-cols-5">
              <div className="col-span-2 md:col-span-1 pl-10">
                <p>11:50</p>
              </div>
              <div className="col-span-3 md:col-span-4 text-center">
                <p>Receso</p>
              </div>
            </div>
            <div className="mb-6 xl:mb-4 border border-gray-400 p-2 grid gap-4 content-center grid-cols-5">
              <div className="col-span-2 lg:col-span-1 xl:col-span-2 pl-10">
                <p>12:00 - 14:00</p>
              </div>
              <div className="col-span-3 lg:col-span-4 xl:col-span-3 text-center md:text-left lg:text-center xl:text-left md:pl-20 lg:pl-0 xl:pl-20 2xl:pl-28">
                <p>Talleres</p>
              </div>
            </div>
            <ProgramItem
              hour="16:00"
              title="Presentaciones relámpago"
              description={`<p class="text-sm text-gray-700">Moderadores: Dr. Tomás Bautista (CUAIEED), Dra. Ana Yuri Ramírez (DGTIC)</p>`}
            />
          </div>
          <div className="xl:px-2 xl:w-1/2">
            <h3 className="text-xl my-2 bg-orange_unam text-white p-2">
              Martes 24 de octubre
            </h3>
            <ProgramItem
              hour="9:00"
              title={`Mesa: "Investigación en IAGen en la UNAM: su impacto educativo"`}
              description={`<p>Ponentes: Dr. Gibrán Fuentes (IIMAS), Dr. Caleb Rascón (IIMAS), Dra. Atocha Aliseda (IIF), Dr. Carlos Minutti (FI)</p><p class="text-sm text-gray-700">Moderadora: Dra. Jimena Olveres (CECAv)</p>`}
            />
            <ProgramItem
              hour="10:00"
              title={`Mesa: "IA generativa y evaluación: ¿se acabaron los exámenes?"`}
              description={`<p>Ponentes: Dr. Melchor Sánchez Mendiola (CUAIEED), Dra. Gabriela de la Cruz (IISUE), Mtra. Elibidú Ortega Sánchez (CUAIEED)</p><p class="text-sm text-gray-700">Moderador: MI Alejandro Velázquez Mena (FI)</p>`}
            />
            <ProgramItem
              hour="11:00"
              title={`Mesa: "Futuros de la IA generativa en la UNAM: ¿viaje sin retorno?"`}
              description={`<p>Ponentes: Dr. Boris Escalante (CECAv), Dr. Héctor Benítez (DGTIC), Dra. María Leticia De Anda Munguía (ENES León) y Dr. Marco Negrete (FI)</p><p class="text-sm text-gray-700">Moderadora: Dra. Guadalupe Vadillo (CUAIEED)</p>`}
            />
            <div className="mb-6 xl:mb-4 border border-gray-400 p-2 grid gap-4 content-center grid-cols-5">
              <div className="col-span-2 md:col-span-1 pl-10">
                <p>11:50</p>
              </div>
              <div className="col-span-3 md:col-span-4 text-center">
                <p>Receso</p>
              </div>
            </div>
            <div className="mb-6 xl:mb-4 border border-gray-400 p-2 grid gap-4 content-center grid-cols-5">
              <div className="col-span-2 lg:col-span-1 xl:col-span-2 pl-10">
                <p>12:00 - 14:00</p>
              </div>
              <div className="col-span-3 lg:col-span-4 xl:col-span-3 text-center md:text-left lg:text-center xl:text-left md:pl-20 lg:pl-0 xl:pl-20 2xl:pl-28">
                <p>Talleres</p>
              </div>
            </div>
            <ProgramItem
              hour="16:00"
              title="Presentaciones relámpago"
              description={`<p class="text-sm text-gray-700">Moderadores: Mtro. Federico Turnbull (DGBSIE), Mtro. Ricardo Tavira (DGBSIE)</p>`}
            />
            <ProgramItem
              hour="18:00"
              title="Clausura"
              description={`<p>Dr. Melchor Sánchez (CUAIEED), Dr. Boris Escalante (CECAv)</p>`}
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
