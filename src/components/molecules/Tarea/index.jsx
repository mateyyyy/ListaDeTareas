import React, { useState } from 'react'
import TrashCanButon from '../../atoms/TrashCanButon'
import styles from './Tarea.module.css'

export default function Tarea({nombre, deleteTask}) {

  const [checked, setCheck] = useState(false);
  const activarDelete = () => {
    deleteTask(nombre)
  }
  return (
    <div id={styles.contenedorTarea}>
        <input type="checkbox" onChange={() => setCheck(!checked)}/>
        <h2 className={checked? styles.check : styles.notCheck}>{nombre}</h2>
        <TrashCanButon deleteTask={activarDelete}></TrashCanButon>
    </div>
  )
}
