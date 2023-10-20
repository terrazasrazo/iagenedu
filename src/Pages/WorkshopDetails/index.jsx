import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
// import "./WorkshopDetails.css";
import Speaker from "../../Components/Speaker";

const cookies = new Cookies();

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
  if (availableSeats > 10 && availableSeats <= 20)
    availableSeatsColor = "bg-yellow-500";
  if (availableSeats <= 10) availableSeatsColor = "bg-orange-500";
  if (availableSeats > 0) {
    return (
      <a
        onClick={() => registerToWorkshop(workshopId)}
        className={`${availableSeatsColor} text-gray-50 p-2 inline-block rounded cursor-pointer`}
        id="registerWorkshopButton"
      >
        registrarse al taller
      </a>
    );
  } else {
    return (
      <span
        className="bg-red-500 text-gray-50 p-2 inline-block rounded"
        id="registerWorkshopButton"
      >
        registro cerrado
      </span>
    );
  }
};

const registerToWorkshop = (workshopId) => {
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

      fetch("https://ada.bunam.unam.mx/iagen-api/workshopassistants/", options)
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            if (data[0].workshopId && data[0].userId) {
              cookies.set("worshopsCount", cookies.get("worshopsCount") + 1, {
                path: "/",
              });

              window.scroll(0, 0);
              let successMessage = document.getElementById("successMessage");
              successMessage.classList.remove("hidden");
              setTimeout(() => {
                successMessage.classList.add("hidden");
                window.location.href = "/profile/";
              }, 10000);
            } else {
              displayRegisterWorkshopMessage(
                "Ocurrió un error inesperado. Intente más tarde."
              );
            }
          } else {
            window.scroll(0, 0);
            displayRegisterWorkshopMessage(
              "Ya se encuentra registrado a este taller."
            );
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
    const loginformContainer = document.getElementById("loginform-container");
    loginformContainer.classList.remove("hidden");
  }
};

function WorkshopDetails() {
  const { id } = useParams();
  const [items, setItems] = useState(0);

  useEffect(() => {
    fetch(`https://ada.bunam.unam.mx/iagen-api/workshops/${id}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [id]);

  if (cookies.get("worshopsCount") > 0) {
    fetch(
      `https://ada.bunam.unam.mx/iagen-api/workshops/validate/${id}/${cookies.get(
        "id"
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.registered === 1) {
          const registerWorkshopButton = document.getElementById(
            "registerWorkshopButton"
          );
          registerWorkshopButton.classList.remove("pointer");
          registerWorkshopButton.innerHTML = "estás registrado en este taller";
        }
      });
  }

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
          if(item.level === 1) workshopLevel = "bg-blue-400"
          if(item.level === 2) workshopLevel = "bg-blue-600"
          if(item.level === 3) workshopLevel = "bg-blue-900"

          return (
            <section key={item.id} id="workshop-details">
              <article className="p-4">
                <header className="mb-4">
                  <h1 className={`text-3xl text-white p-2 rounded-sm ${workshopLevel}`}>{item.title}</h1>
                </header>
                <main className="lg:flex lg:flex-row">
                  <section className="lg:w-2/3">
                    <div>
                      <h2 className="text-2xl text-orange_unam my-2">
                        Propósito del taller
                      </h2>
                      {workshopContent(item.purpouse)}
                    </div>
                    <div id="workshop-content">
                      <h2 className="text-2xl text-orange_unam my-2">
                        Contenido del taller
                      </h2>
                      {workshopContent(item.themes)}
                    </div>
                    <div>
                      <h2 className="text-2xl text-orange_unam my-2">
                        Producto del taller
                      </h2>
                      {workshopContent(item.product)}
                    </div>
                  </section>
                  <aside className="border-t border-gray-400 lg:border-none mt-8 lg:mt-1 lg:pl-8">
                    <div>
                      <h3 className="text-xl text-orange-700 my-2">
                        Nivel educativo al que está dirigido
                      </h3>
                      <p>{item.educationLevel}</p>
                    </div>
                    <div>
                      <h3 className="text-xl text-orange-700 my-2">
                        Área de conocimiento que aborda
                      </h3>
                      <p>{item.knowledgeArea}</p>
                    </div>
                    <div id="workshop-tools">
                      <h3 className="text-xl text-orange-700 my-2">
                        Herramientas que se usarán en el taller
                      </h3>
                      {workshopContent(item.tools)}
                    </div>
                    <div>
                      <h3 className="text-xl text-orange-700 my-2">
                        Palabras clave
                      </h3>
                      <p className="text-sm">{item.keywords}</p>
                    </div>
                    <div className="mt-4">
                      <p>
                        {availableRegister(
                          item.participants,
                          item.assistantsCount,
                          id
                        )}
                      </p>
                    </div>
                  </aside>
                </main>
                <section>
                  <div className="mt-8 border-t border-gray-400">
                    <h2 className="text-2xl text-orange_unam my-2">
                      {speakerLabel}
                    </h2>
                    {item.speakers.map((speaker) => {
                      return <Speaker key={speaker.id} data={speaker} />;
                    })}
                  </div>
                  <div id="workshop-references" className="mt-8 border-t border-gray-400">
                    <h2 className="text-2xl text-orange_unam my-2">
                      Referencias
                    </h2>
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
