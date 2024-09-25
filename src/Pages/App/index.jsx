import { useRoutes, BrowserRouter, Route, Routes } from "react-router-dom";
import { KeywordProvider } from "../../Context";

import HeaderBlock from "../../Components/HeaderBlock/HeaderBlock";
import FooterBlock from "../../Components/FooterBlock/FooterBlock";

import Home from "../Home";
import Jornada2th from "../Jornada2th";
import InterestingResources from "../InterestingResources";
import Findings from "../Findings";
import User from "../User/User";
import NotFound from "../NotFound";
import Keywords from "../Keywords";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/2a-jornada/:jornadaState?/:jornadaDetails?", element: <Jornada2th /> },
    { path: "/resources", element: <InterestingResources /> },
    { path: "/recomendaciones", element: <Findings /> },
    { path: "/keywords/", element: <Keywords /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <KeywordProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/user/:userState/:userHash?" element={<User />} />
          <Route
            path="*"
            element={
              <>
                <HeaderBlock />
                <main className="container mx-auto">
                  <AppRoutes />
                </main>
                <FooterBlock />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </KeywordProvider>
  );
}

export default App;
