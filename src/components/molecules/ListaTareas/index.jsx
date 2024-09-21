import React from 'react'
import Tarea from '../Tarea'
import styles from './ListaTareas.module.css'

export default function ListaTareas({ taskList,deleteTask }) {

  if(taskList.length==0){
    return <h2>No hay tareas</h2>
  }
  else{
    console.log(taskList);
  return (
    <ul id={styles.ListaTareas}>
      {taskList.map((task, index) => (
          <Tarea nombre={task} key={index} deleteTask={deleteTask}/>
        ))}
    </ul>    
  )
  }
}
