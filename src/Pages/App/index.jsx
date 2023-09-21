import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Workshops from '../Workshops'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  return useRoutes([
    { path: '/iagenedu/', element: <Home /> },
    { path: '/iagenedu/workshops', element: <Workshops /> },
    { path: '*', element: <NotFound /> }
  ]);
}

function App() {
  return (
    <>      
      <BrowserRouter>
        <header>
          <h1>IA GEn</h1>
          <Navbar />
        </header>
        
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
