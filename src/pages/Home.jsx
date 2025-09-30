import Level1 from '../components/Level1.jsx'
export default function Home() {
  return (
    <div className="grid">
      <div className="card"><h2>Домашня</h2><p>Глобальні дані доступні на різних рівнях без пропс дрилінгу.</p></div>
      <Level1 />
    </div>
  )
}
