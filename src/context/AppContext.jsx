import { createContext, useMemo, useState } from 'react'

export const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [users, setUsers] = useState([
    { id: 1, name: 'Іван', role: 'Адмін' },
    { id: 2, name: 'Олена', role: 'Редактор' },
    { id: 3, name: 'Микита', role: 'Користувач' }
  ])
  const value = useMemo(() => ({
    theme,
    users,
    setTheme,
    addUser: u => setUsers(prev => [...prev, { id: Date.now(), ...u }])
  }), [theme, users])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
