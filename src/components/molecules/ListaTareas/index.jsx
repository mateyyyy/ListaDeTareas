import React from 'react'
import Tarea from '../Tarea'
import styles from './ListaTareas.module.css'

export default function ListaTareas() {
  return (
    <ul id={styles.ListaTareas}>
      <Tarea nombre="Cocinar"/>
      <Tarea nombre="Estudiar"/>
    </ul>    
  )
}
