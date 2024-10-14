import React, { useState } from 'react'
import styles from './Stories.module.css'
import Edit from '../Edit';
import DeleteButon from '../DeleteButton';

export default function Stories({tasks, updateState}) {

  const changeState = (task) => {
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/tasks/${task._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: task.name,
        description: task.description,
        story: task.story,
        created: task.created,
        dueDate: task.dueDate,
        done: !task.done,
      })
    })
    .then((response) => response.json())
    .then((data) => {
      updateState();
    })
  }

  return (
        <>
            <div id={styles.cardContainer}> 
              {tasks.length==0?
              <p>cargando...</p>:
              tasks.map((elemento) => 
              <div key={elemento._id} className={styles.story}>
              <div className={styles.inputAndName}>
                <input onChange={()=>{changeState(elemento)}} className={styles.checkbox} type='checkbox' checked={elemento.done}/>
                {elemento.name}
              <Edit url={`/tasks/${elemento._id}`} updateTask={updateState}></Edit>
              <DeleteButon url={`/tasks/${elemento._id}`} updateState={updateState}></DeleteButon>         
              </div>
              {elemento.description!=null ? 
                <>
                    <div className={styles.divisor}></div>
                    <div className={styles.descripcionContainer}>
                    <p>{elemento.description.slice(0, 50)}</p>
                    </div>
                </>
                :
                 null
              }
              
              </div>)}
            </div>
        </>
  )
}
