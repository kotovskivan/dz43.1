import { useAppContext } from '../hooks/useAppContext.js'
export default function Settings() {
  const { theme, setTheme } = useAppContext()
  return (
    <div>
      <h2>Налаштування</h2>
      <p>Поточна тема: <b>{theme}</b></p>
      <div className="row">
        <button className="btn" onClick={() => setTheme('light')}>Світла</button>
        <button className="btn" onClick={() => setTheme('dark')}>Темна</button>
      </div>
    </div>
  )
}
