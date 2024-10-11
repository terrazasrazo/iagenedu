import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import FooterBlock from "../../FooterBlock/FooterBlock";
import "./Submission.css";

const Submission = () => {

  const sendSubmission = (event) => {
    const API_URL = import.meta.env.VITE_API_URL;
    const cookies = new Cookies();
    event.preventDefault();
    
    const titleTag = document.getElementsByName("title")[0];
    const categoryTag = document.getElementsByName("category")[0];
    const videoTag = document.getElementsByName("video")[0];
    const keywordsTag = document.getElementsByName("keywords")[0];

    const formData = {
      title: titleTag.value,
      category: categoryTag.value,
      video: videoTag.value,
      keywords: keywordsTag.value,
      user: cookies.get("id"),
    };

    fetch(`${API_URL}/lightning`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        const messageTag = document.querySelector(".submission__data--info-form_item-message");
        messageTag.classList.remove("success");
        messageTag.classList.add("error");
        messageTag.textContent = data.error;
        return;
      }
      titleTag.value = "";
      categoryTag.value = "";
      videoTag.value = "";
      const messageTag = document.querySelector(".submission__data--info-form_item-message");
      messageTag.classList.remove("error");
      messageTag.classList.add("success");      
      messageTag.textContent = "Presentación enviada con éxito";
    })
  }

  return (
    <>
      <HeaderBlock />
      <section className="submission">
        <header className="submission__header">
          <div><h2>
            <NavLink to="/user/profile">Mi espacio</NavLink>  
          </h2></div>
          <div>
            <NavLink to="/user/signout">Cerrar sesión</NavLink>
          </div>
        </header>
        <article className="submission__data">
          <div className="submission__data--info">
            <h3>Presentaciones relámpago</h3>
            <ul type="a">
              <li>Prácticas docentes que incorporan la IA Gen (diseño de experiencias de aprendizaje, evaluación, enriquecimiento curricular, etc.)</li>
              <li>Experiencias de estudiantes enriquecidas por la IA Gen</li>
              <li>Recursos educativos generados con apoyo de IA Gen (en este caso, podrán someter el recurso al certamen correspondiente)</li>
            </ul>
            <form onSubmit={() => sendSubmission(event)}>
              <div>
                <p className="submission__data--info-form_item-message">&nbsp;</p>
              </div>
              <div className="submission__data--info-form_item">
                <label htmlFor="title">Título de la presentación</label>
                <input type="text" id="title" name="title" required />
              </div>
              <div className="submission__data--info-form_item">
                <label htmlFor="category">Categoria</label>
                <select name="category" id="category" required>
                <option value="">Seleccione una opción</option>
                <option value="a">Prácticas docentes que incorporan la IA Gen</option>
                <option value="b">Experiencias de estudiantes enriquecidas por la IA Gen</option>
                <option value="c">Recursos educativos generados con apoyo de IA Gen</option>
                </select>
              </div>
              <div className="submission__data--info-form_item">
                <label htmlFor="video">Enlace de video</label>
                <input type="url" id="video" name="video" placeholder="https://drive.google=..." />
              </div>
              <div className="submission__data--info-form_item">
                <label htmlFor="keywords"><strong>Cinco</strong> palabras clave</label>
                <input type="text" id="keywords" name="keywords" />
                <p className="text-sm text-red-800">Las palabras clave deben ir separadas por &quot;,&quot; (coma).</p>
              </div>
              <div className="submission__data--info-form_item">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
          <div className="submission__data--instructions">
            <h4>Lineamientos de video</h4>
            <div className="submission__data--instructions-step">
              <p>Los trabajos deberá plantear de forma sintética la práctica, experiencia o recurso que involucre este tipo de herramientas.</p>
            </div>
            <div className="submission__data--instructions-step">
              <p>Comparta un enlace de video publicado en YouTube o un enlace a Google Drive u otro servicio en la nube, siempre que el enlace sea público.</p>
              <p className="text-base text-iagen_magenta">Para validar que su enlace sea público puede copiarlo y pegarlo en una ventana de incógnito de su navegador web.</p>
            </div>
            <div className="submission__data--instructions-step">
            <p>Recuerde que la extensión del video debe ser de 3 a 5 minutos.</p>
            </div>
            <div className="submission__data--instructions-step">
              <p>El video debe ser grabado en formato horizontal.</p>
              <p className="text-center"><img src="/images/jornada2th/orientacion-video.png" width="300" alt="" className="block mx-auto my-4" /></p>
            </div>
            <div className="submission__data--instructions-step">
              <h5>En caso de grabar con la cámara de teléfono</h5>
              <ol>
                <li>Use la cámara posterior del teléfono (no la que se encuentra del lado de la pantalla).</li>
                <li>En resolución mínima de 720p, de preferencia 1080p o Full HD.</li>
                <li>Coloque el teléfono sobre alguna superficie o use un tripié o selfie stick que impida el movimiento del teléfono mientras ocurre la grabación.</li>
                <li>Colóquese en un lugar con buena iluminación, verifique que su rostro se visualice correctamente.</li>
                <li>
                  Utilice un tamaño de imagen en video <strong><em>medium shot</em></strong> o en su defecto <em>medium close-up</em>.
                  <img src="/images/jornada2th/camera-shot.png" alt="Camera shot" className="block mx-auto my-4" />
                </li>
                <li>Busque que el fondo sea un espacio claro y sin distracciones.</li>
              </ol>
            </div>
            <div className="submission__data--instructions-step">
              <h5>En el caso de grabar con la cámara de la computadora</h5>
              <ol>
                <li>Coloque la cámara a la altura de sus ojos, de manera que usted vea de frente a la cámara y que su espalda se encuentre recta y el cuello sin flexionar.</li>
                <li>Colóquese en un lugar con buena iluminación, verifique que su rostro se visualice correctamente.</li>
                <li>Utilice un tamaño de imagen en video <strong><em>medium shot</em></strong> o en su defecto <em>medium close-up</em>.
                <img src="/images/jornada2th/camera-shot.png" alt="Camera shot" className="block mx-auto my-4" /></li>
                <li>Busque que el fondo sea un espacio claro y sin distracciones.</li>
                <li>
                Se recomienda emplear alguna de las siguientes aplicaciones para facilitar el trabajo de grabación:
                <ul>
                  <li><a href="https://zoom.us/es" target="_blank" rel="noreferrer">Zoom</a></li>
                  <li><a href="https://meet.google.com/" target="_blank" rel="noreferrer">Google Meet</a></li>
                  <li><a href="https://www.loom.com/" target="_blank" rel="noreferrer">Loom</a></li>
                  <li><a href="https://www.mmhmm.app/home" target="_blank" rel="noreferrer">mmhmm</a></li>
                </ul>
                </li>
              </ol>
            </div>
          </div>
        </article>
      </section>
      <FooterBlock />
    </>
  );
};

export default Submission;
