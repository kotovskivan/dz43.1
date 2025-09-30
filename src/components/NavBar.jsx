import { NavLink } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext.js'

export default function NavBar() {
  const { theme, setTheme } = useAppContext()
  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' nav-link--active' : '')
  return (
    <nav className="nav">
      <NavLink to="/" className={linkClass} end>Головна</NavLink>
      <NavLink to="/users" className={linkClass}>Користувачі</NavLink>
      <NavLink to="/settings" className={linkClass}>Налаштування</NavLink>
      <span className="muted">Тема: {theme}</span>
      <button className="btn" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>Змінити тему</button>
    </nav>
  )
}
