import { useRoutes, BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderBlock from "../../Components/HeaderBlock/HeaderBlock";
import FooterBlock from "../../Components/FooterBlock/FooterBlock";

import Jornada2th from "../Jornada2th";
import Conference from "../Conference";
import Workshops from "../Workshops";
import Workshop from "../Workshop/Workshop";
import NotFound from "../NotFound";

const AppRoutes = () => {
  return useRoutes([
    { path: "/2a-jornada/", element: <Jornada2th /> },
    { path: "/2a-jornada/conference/:conferenceName?", element: <Conference /> },
    { path: "/2a-jornada/workshops", element: <Workshops /> },
    { path: "/2a-jornada/workshop/:workshopId", element: <Workshop /> },
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
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
  );
}

export default App;
