import { useRoutes, BrowserRouter } from 'react-router-dom'
import { NavLink } from "react-router-dom"
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
        <header className='flex flex-row w-full items-center mb-6'>
          <div className='w-1/2'>
            <h1>
              <NavLink to="/iagenedu/">
                <img src="/images/iagen-icon.svg" width="120" alt="" />
              </NavLink>
            </h1>
          </div>
          <Navbar />
        </header>
        
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
