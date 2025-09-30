import { useAppContext } from '../hooks/useAppContext.js'
export default function Users() {
  const { users } = useAppContext()
  return (
    <div>
      <h2>Користувачі</h2>
      <div className="grid">
        {users.map(u => (
          <div className="card" key={u.id}>
            <div className="row"><span className="kpi">{u.name}</span><span className="muted">{u.role}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}
