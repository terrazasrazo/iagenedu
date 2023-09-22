import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./WorkshopDetails.css";
import Speaker from "../../Components/Speaker";
import LoginForm from "../../Components/LoginForm";

const showLoginForm = () => {
  const loginForm = document.getElementById("loginform-container");
  loginForm.classList.remove("hidden");
};

function WorkshopDetails() {
  const { id } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6600/workshops/${id}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [id]);

  return (
    <>
      <LoginForm />
      {items &&
        items.map((item) => {
          let speakerLabel = "Tallerista";
          if (item.speakers.length > 1) speakerLabel = "Talleristas";
          return (
            <section key={item.id} id="workshop-details">
              <article>
                <header>
                  <h1 className="text-3xl">{item.title}</h1>
                </header>
                <main className="flex flex-row">
                  <section className="w-2/3 p-2">
                    <div>
                      <h2>Propósito del taller</h2>
                      <p>{item.purpouse}</p>
                    </div>
                    <div>
                      <h2>Contenido del taller</h2>
                      <div>{item.themes}</div>
                    </div>
                    <div>
                      <h2>Producto del taller</h2>
                      <p>{item.product}</p>
                    </div>
                    <div>
                      <h2>Referencias</h2>
                      <p className="text-sm">{item.references}</p>
                    </div>
                    <section className="mt-4">
                      <h2>{speakerLabel}</h2>
                      {item.speakers.map((speaker) => {
                        return <Speaker key={speaker.id} data={speaker} />;
                      })}
                    </section>
                  </section>
                  <aside className="w-1/3 p-2">
                    <div>
                      <h2>Nivel educativo al que está dirigido</h2>
                      <p>{item.educationLevel}</p>
                    </div>
                    <div>
                      <h2>Área de conocimiento que aborda</h2>
                      <p>{item.knowledgeArea}</p>
                    </div>
                    <div>
                      <h2>Palabras clave</h2>
                      <p className="text-sm">{item.keywords}</p>
                    </div>
                    <div className="mt-12">
                      <p>
                        <a
                          onClick={showLoginForm}
                          className="bg-green-500 text-gray-50 p-4 rounded cursor-pointer"
                        >
                          registrarse al taller
                        </a>
                      </p>
                    </div>
                  </aside>
                </main>
              </article>
            </section>
          );
        })}
    </>
  );
}

export default WorkshopDetails;
