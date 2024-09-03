import React, { useState } from 'react'
import Formulario from '../Formulario'
import styles from './VentanaPrincipal.module.css'
import Titulo from '../../atoms/Titulo'
import ListaTareas from '../ListaTareas'


export default function VentanaPrincipal() {
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (nombre) => {
    setTaskList(taskList.filter((tarea) => tarea != nombre));
  }

  const addTask = (titulo) => {
    setTaskList([...taskList,titulo]);
  }
  return (
    <div id={styles.PrinDiv}>
        <Titulo></Titulo>
        <Formulario addTask={addTask}></Formulario>
        <ListaTareas taskList={taskList} deleteTask={deleteTask}></ListaTareas>
    </div>
  )
}
