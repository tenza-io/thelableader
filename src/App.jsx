import './App.css';
import LandingPage from './components/LandingPage'
import NominatePage from './components/NominatePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/nominate" element={<NominatePage />} />
    </Routes>
  )
}

export default App
