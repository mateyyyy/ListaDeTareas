import React, { useContext, createContext , useState } from 'react'
import styles from './VentanaPrincipal.module.css'
import Header from '../Header'
import MenuDesplegado from '../MenuDesplegado';
import { useLocation } from 'react-router-dom';

export const MenuContext = createContext();

export default function VentanaPrincipal() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  var titulo = "";
  switch (location.pathname){
    case '/':
      titulo = "Inicio";
      break;
    case '/my-projects':
      titulo = "Mis proyectos";
      break;
    case '/my-stories':
      titulo = "Mis historias";
      break;
  }

  return (
  <>
    <MenuContext.Provider value={{isOpen, setIsOpen}}>

      <MenuDesplegado></MenuDesplegado>
      <Header titulo={titulo}/>

    </MenuContext.Provider>

  </>  
)
}
