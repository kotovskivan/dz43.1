import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
export function useAppContext() { return useContext(AppContext) }
