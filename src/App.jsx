import { Routes, Route } from 'react-router-dom'
import AppProvider from './context/AppContext.jsx'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import Settings from './pages/Settings.jsx'
import { useAppContext } from './hooks/useAppContext.js'

function Shell() {
  const { theme } = useAppContext()
  return (
    <div className={`app theme-${theme}`}>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<h2>Сторінку не знайдено</h2>} />
        </Routes>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  )
}
