import { useRoutes, BrowserRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { WorkshopProvider } from '../../Context'
import Home from '../Home'
import Workshops from '../Workshops'
import WorkshopDetails from '../WorkshopDetails'
import Register from '../Register'
import UserProfile from '../UserProfile'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import LoginForm from '../../Components/LoginForm'
import './App.css'

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    // {path: '/call-for', element: <div>Convocatoria</div>},
    { path: '/workshops', element: <Workshops /> },
    { path: '/workshops/:id', element: <WorkshopDetails />},
    { path: '/register', element: <Register />},
    { path: '/profile', element: <UserProfile />},
    { path: '*', element: <NotFound /> }
  ]);
}

function App() {
  return (
    <WorkshopProvider>      
      <BrowserRouter>
        <header className='flex flex-row w-full items-center mb-6'>
          <div className='w-1/2'>
            <h1>
              <NavLink to="/">
                <img src="/images/iagen-icon.svg" width="120" alt="" />
              </NavLink>
            </h1>
          </div>
          <Navbar />
        </header>
        <AppRoutes />
        <LoginForm />
      </BrowserRouter>
    </WorkshopProvider>
  )
}

export default App
