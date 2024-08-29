import { useRoutes, BrowserRouter } from "react-router-dom";
import { KeywordProvider } from "../../Context";

import HeaderBlock from "../../Components/HeaderBlock/HeaderBlock";
import FooterBlock from "../../Components/FooterBlock/FooterBlock";

import Home from "../Home";
import Jornada2th from "../Jornada2th";
import CallFor from "../CallFor";
import InterestingResources from "../InterestingResources";
import Findings from "../Findings";
import Register from "../Register";
import UserProfile from "../UserProfile";
import UserActivate from "../UserActivate";
import PasswordRecovery from "../PasswordRecovery";
import NotFound from "../NotFound";
import LoginForm from "../../Components/LoginForm";
import Keywords from "../Keywords";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/2ajornada", element: <Jornada2th /> },
    { path: "/call-for", element: <CallFor /> },
    { path: "/resources", element: <InterestingResources /> },
    { path: "/recomendaciones", element: <Findings /> },
    { path: "/register", element: <Register /> },
    { path: "/profile", element: <UserProfile /> },
    { path: "/activate/:userHash", element: <UserActivate /> },
    { path: "/recovery/:userHash", element: <PasswordRecovery /> },
    { path: "/keywords/", element: <Keywords /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <KeywordProvider>
      <BrowserRouter>
        <HeaderBlock />
        <main className="container mx-auto">
          <AppRoutes />
        </main>
        <LoginForm />
        <FooterBlock />
      </BrowserRouter>
    </KeywordProvider>
  );
}

export default App;
