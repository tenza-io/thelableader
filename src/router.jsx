import { createBrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NominatePage from './components/NominatePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/nominate',
    element: <NominatePage />,
  },
])

export default router
