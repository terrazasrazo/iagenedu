import { useRoutes, BrowserRouter, Route, Routes } from "react-router-dom";
import { KeywordProvider } from "../../Context";

import HeaderBlock from "../../Components/HeaderBlock/HeaderBlock";
import FooterBlock from "../../Components/FooterBlock/FooterBlock";

import Home from "../Home";
import InterestingResources from "../InterestingResources/InterestingResources";
import Findings from "../Findings";
import NotFound from "../NotFound";
import Keywords from "../Keywords";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
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
