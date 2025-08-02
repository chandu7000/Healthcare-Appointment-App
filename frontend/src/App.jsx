import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import AppointmentsPage from './pages/AppointmentsPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:doctorId" element={<BookPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
      </Routes>
    </Router>
  )
}

export default App
