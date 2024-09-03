import React from 'react'
import TrashCanButon from '../../atoms/TrashCanButon'
import styles from './Tarea.module.css'

export default function Tarea({nombre, deleteTask}) {

  const activarDelete = () => {
    deleteTask(nombre)
  }
  return (
    <div id={styles.contenedorTarea}>
        <input type="checkbox" />
        <h2>{nombre}</h2>
        <TrashCanButon deleteTask={activarDelete}></TrashCanButon>
    </div>
  )
}
