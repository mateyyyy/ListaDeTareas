import { useState } from 'react'
import './App.css'
import VentanaPrincipal from './components/molecules/VentanaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VentanaPrincipal></VentanaPrincipal>
    </>
  )
}

export default App
