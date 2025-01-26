import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './layout/header'
import { Menu } from './components/Menu/Menu'
import { Schedule, Homework, Materials, GpaCalculator } from './pages'
import { LanguageSwitcher } from './components/LanguageSwitcher/LanguageSwitcher'
import 'animate.css'

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto animate__animated animate__fadeIn animate__slower'>
        <LanguageSwitcher />
        <Header/>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/gpa" element={<GpaCalculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App