import { useState } from 'react'
import './App.css'
import VentanaPrincipal from './components/molecules/VentanaPrincipal'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <VentanaPrincipal></VentanaPrincipal>
      <Outlet />
    </>
  )
}

export default App
