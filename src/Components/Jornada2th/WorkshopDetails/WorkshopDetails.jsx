import { useState, useEffect, useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { KeywordContext } from "../../../Context";
import "./WorkshopDetails.css";
import Speaker from "../../Speaker/";

function WorkshopDetails() {
  const [items, setItems] = useState(0);
  const [seat, setSeat] = useState(0);
  const context = useContext(KeywordContext);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { jornadaDetails } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;

  const hideRegisterWorkshopMessage = () => {
    const registerMessage = document.getElementById("registerWorkshopMessage");
    registerMessage.classList.add("hidden");
  };

  const displayRegisterWorkshopMessage = (message) => {
    let registerMessage = document.getElementById("registerWorkshopMessage");
    registerMessage.getElementsByTagName("p")[0].textContent = "";
    registerMessage.getElementsByTagName("p")[0].textContent = message;
    registerMessage.classList.remove("hidden");
    setTimeout(() => {
      registerMessage.classList.add("hidden");
    }, 5000);
  };

  const availableRegister = (participants, assistantsCount, workshopId) => {
    const availableSeats = participants - assistantsCount;
    let availableSeatsColor = "";
    if (availableSeats > 20) availableSeatsColor = "bg-green-500";
    if (availableSeats > 10 && availableSeats < 20)
      availableSeatsColor = "bg-yellow-500";
    if (availableSeats < 10) availableSeatsColor = "bg-orange-500";

    if (cookies.get("worshopsCount") > 0) {
      fetch(
        `${API_URL}/workshops/validate/${jornadaDetails}/${cookies.get("id")}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.registered === 1) {
            setSeat(true);
          }
        });
    }

    if (availableSeats > 0) {
      if (seat) {
        return (
          <span
            className="bg-green-500 text-gray-50 p-4 rounded"
            id="registerWorkshopButton"
          >
            ya estás registrado en este taller
          </span>
        );
      } else {
        return (
          <a
            onClick={() => registerToWorkshop(workshopId)}
            className={`${availableSeatsColor} text-gray-50 p-4 rounded cursor-pointer`}
            id="registerWorkshopButton"
          >
            registrarse al taller
          </a>
        );
      }
    } else {
      return (
        <span
          className="bg-red-500 text-gray-50 p-4 rounded"
          id="registerWorkshopButton"
        >
          registro cerrado
        </span>
      );
    }
  };

  const registerToWorkshop = (workshopId) => {
    console.log(cookies.get("worshopsCount"));
    if (cookies.get("worshopsCount") !== undefined) {
      if (cookies.get("worshopsCount") < 2) {
        let registerData = {
          workshopId: workshopId,
          userId: cookies.get("id"),
        };

        let dataJSON = JSON.stringify(registerData);

        let options = {
          method: "POST",
          body: dataJSON,
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(`${API_URL}/workshopassistants/`, options)
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              displayRegisterWorkshopMessage(data.error);
              return;
            }
            if (data[0].workshopId && data[0].userId) {
              cookies.set("worshopsCount", cookies.get("worshopsCount") + 1, {
                path: "/",
              });

              window.scroll(0, 0);
              let successMessage = document.getElementById("successMessage");
              successMessage.classList.remove("hidden");
              setTimeout(() => {
                successMessage.classList.add("hidden");
                navigate("/user/profile");
              }, 10000);
            } else {
              displayRegisterWorkshopMessage(data.error);
            }
          })
          .catch((error) => {
            console.log(error);
            displayRegisterWorkshopMessage(
              "Ocurrió un error inesperado. Intente más tarde."
            );
          });
      } else {
        displayRegisterWorkshopMessage(
          "No puedes registrarte a más de 2 talleres"
        );
      }
    } else {
      displayRegisterWorkshopMessage("Para registrarse debe iniciar sesión");
    }
  };

  useEffect(() => {
    fetch(`${API_URL}/workshops/${jornadaDetails}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [jornadaDetails]);

  const workshopContent = (content) => {
    const htmlContent = { __html: content };
    return <div dangerouslySetInnerHTML={htmlContent}></div>;
  };

  return (
    <>
      <div id="registerWorkshopMessage" className="hidden">
        <div>
          <span onClick={hideRegisterWorkshopMessage}>X</span>
          <p></p>
        </div>
      </div>
      <div className="bg-green-500 text-white hidden" id="successMessage">
        <p className="p-4 text-right">
          Tu registro al taller se ha completado con éxito.
          <br />
          La información de acceso al taller la podrás visualizar desde tu
          perfil en el sitio.
        </p>
      </div>
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
                  <section className="lg:w-2/3">
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
                      </div>
                    </div>
                    <div className="mt-12">
                      <p>
                        {availableRegister(
                          item.participants,
                          item.assistantsCount,
                          jornadaDetails
                        )}
                      </p>
                    </div>
                  </aside>
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
