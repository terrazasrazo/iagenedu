import { useRoutes, BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderBlock from "../../Components/HeaderBlock/HeaderBlock";
import FooterBlock from "../../Components/FooterBlock/FooterBlock";

import Jornada2th from "../Jornada2th";
import Conference from "../Conference";
import Workshops from "../Workshops";
import Workshop from "../Workshop/Workshop";
import InterestingResources from "../InterestingResources/InterestingResources";
import NotFound from "../NotFound";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Jornada2th /> },
    { path: "/conference/:conferenceName?", element: <Conference /> },
    { path: "/workshops", element: <Workshops /> },
    { path: "/workshop/:workshopId", element: <Workshop /> },
    { path: "/resources", element: <InterestingResources /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  const baseName = import.meta.env.VITE_BASE_URL || "/";

  return (
    <BrowserRouter basename={baseName}>
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
  );
}

export default App;
