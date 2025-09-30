import { useAppContext } from '../hooks/useAppContext.js'
export default function Level3() {
  const { users, addUser, theme } = useAppContext()
  return (
    <div>
      <div className="row"><span className="kpi">Тема:</span><span>{theme}</span></div>
      <div className="row"><span className="kpi">Користувачі:</span><span className="muted">{users.length}</span></div>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} — {u.role}</li>)}
      </ul>
      <button className="btn" onClick={() => addUser({ name: 'Новий', role: 'Гість' })}>Додати користувача</button>
    </div>
  )
}
