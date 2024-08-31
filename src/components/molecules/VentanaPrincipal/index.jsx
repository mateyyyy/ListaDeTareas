import React from 'react'
import Formulario from '../Formulario'
import styles from './VentanaPrincipal.module.css'
import Titulo from '../../atoms/Titulo'
import ListaTareas from '../ListaTareas'


export default function VentanaPrincipal() {
  return (
    <div id={styles.PrinDiv}>
        <Titulo></Titulo>
        <Formulario></Formulario>
        <ListaTareas></ListaTareas>
    </div>
  )
}
