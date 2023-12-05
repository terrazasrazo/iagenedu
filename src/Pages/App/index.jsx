import { useRoutes, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { KeywordProvider } from "../../Context";
import Home from "../Home";
import CallFor from "../CallFor";
import Workshops from "../Workshops";
import WorkshopDetails from "../WorkshopDetails";
import InterestingResources from "../InterestingResources";
import Findings from "../Findings";
import Register from "../Register";
import UserProfile from "../UserProfile";
import UserActivate from "../UserActivate";
import PasswordRecovery from "../PasswordRecovery";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";
import LoginForm from "../../Components/LoginForm";
/* I Jornada de Inteligencia Artificial Generativa en Educación UNAM 2023 */
import IJornada from "../IJornada";
import BienvenidaInauguracion from "../IJornada/Sessions/BienvenidaInauguracion";
import IAGenerativaAprendizaje from "../IJornada/Sessions/IAGenerativaAprendizaje";
import ExperienciasIAGenerativaUNAM from "../IJornada/Sessions/ExperienciasIAGenerativaUNAM";
import PresentacionesRelampagoLunes from "../IJornada/Sessions/PresentacionesRelampagoLunes";
import InvestigacionIAGenUNAM from "../IJornada/Sessions/InvestigacionIAGenUNAM";
import IAGenerativaEvaluacion from "../IJornada/Sessions/IAGenerativaEvaluacion";
import FuturosIAGenerativaUNAM from "../IJornada/Sessions/FuturosIAGenerativaUNAM";
import PresentacionesRelampagoMartes from "../IJornada/Sessions/PresentacionesRelampagoMartes";
import Clausura from "../IJornada/Sessions/Clausura";
/* */
import Keywords from "../Keywords";
import "./App.css";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/call-for", element: <CallFor /> },
    { path: "/workshops", element: <Workshops /> },
    { path: "/workshops/:id", element: <WorkshopDetails /> },
    { path: "/resources", element: <InterestingResources /> },
    { path: "/recomendaciones", element: <Findings />},
    { path: "/register", element: <Register /> },
    { path: "/profile", element: <UserProfile /> },
    { path: "/activate/:userHash", element: <UserActivate /> },
    { path: "/recovery/:userHash", element: <PasswordRecovery /> },
    /* I Jornada de Inteligencia Artificial Generativa en Educación UNAM 2023 */
    { path: "/i-jornada", element: <IJornada /> },
    { path: "/i-jornada/bienvenida-inauguracion", element: <BienvenidaInauguracion /> },
    { path: "/i-jornada/ia-generativa-aprendizaje", element: <IAGenerativaAprendizaje /> },
    { path: "/i-jornada/experiencias-ia-generativa-unam", element: <ExperienciasIAGenerativaUNAM /> },
    { path: "/i-jornada/presentaciones-relampago-lunes", element: <PresentacionesRelampagoLunes /> },
    { path: "/i-jornada/investigacion-iagen-unam", element: <InvestigacionIAGenUNAM /> },
    { path: "/i-jornada/ia-generativa-evaluacion", element: <IAGenerativaEvaluacion /> },
    { path: "/i-jornada/futuros-ia-generativa-unam", element: <FuturosIAGenerativaUNAM /> },
    { path: "/i-jornada/presentaciones-relampago-martes", element: <PresentacionesRelampagoMartes /> },
    { path: "/i-jornada/clausura", element: <Clausura /> },
    /* */
    { path: "/keywords/", element: <Keywords /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <KeywordProvider>
      <BrowserRouter>
        <main className="container mx-auto">
          <header className="flex flex-row pt-4 pb-6 px-6">
            <div className="sm:w-1/4">
              <h1 className="inline-block">
                <NavLink to="/">
                  <img src="/images/iagen-icon.svg" width="120" alt="" />
                </NavLink>
              </h1>
            </div>
            <Navbar />
          </header>
          <AppRoutes />
        </main>
        <LoginForm />
        <footer className="p-6 mt-8 text-sm text-white bg-orange_unam">
          <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5">
            <div className="">
              <p>Desarrollado por</p>
              <p>
                <a href="" target="_blank" rel="">
                  <img
                    src="/images/bunam_mooc.svg"
                    width="120"
                    alt="B@UNAM & MOOC"
                  />
                </a>
              </p>
            </div>
            <div className="order-3 lg:order-2 col-span-2 lg:col-span-3 mt-8">
              <h5 className="text-lg font-semibold">Aviso</h5>
              <p>
                Coordinación de Universidad Abierta y Educación a Distancia de
                la UNAM. ©Todos los derechos reservados 2023. Hecho en México.
                Este sitio puede ser reproducido con fines no lucrativos,
                siempre y cuando no se mutile, se cite la fuente completa y su
                dirección electrónica, de otra forma, se requiere permiso previo
                por escrito de la Institución.
              </p>
              <p>
                Al navegar en este sitio, encontrará contenidos diseñados por
                académicos de la UNAM, denominados Recursos Educativos Abiertos
                (REA), disponibles para todo el público en forma gratuita. Los
                contenidos de cada REA son responsabilidad exclusiva de sus
                autores y no tienen impedimento en materia de propiedad
                intelectual; asimismo, no contienen información que por su
                naturaleza pueda considerarse confidencial y reservada.
              </p>
              <p>
                Los REA podrán ser utilizarlos sin fines de lucro, citando
                invariablemente la fuente y sin alterar la obra, respetando los
                términos institucionales de uso y los derechos de propiedad
                intelectual de terceros.
              </p>
            </div>
            <div className="order-2 lg:order-3 text-right">
              <p>
                Contacto:
                <br />
                <a href="mailto:iagenedu@cuaieed.unam.mx" className="underline">
                  iagenedu@cuaieed.unam.mx
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="https://lib.cuaed.unam.mx/portales/aviso-privacidad-simplificado.html"
                  className="underline"
                >
                  Aviso de privacidad
                </a>
              </p>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </KeywordProvider>
  );
}

export default App;
