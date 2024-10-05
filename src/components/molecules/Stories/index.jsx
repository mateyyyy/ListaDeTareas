import React from 'react'
import styles from './Stories.module.css'

export default function Stories({tasks}) {

  const state = (status) => {
    if(status=='todo'){
      return 'running';
    }
    if(status=='running'){
      return 'todo';
    }
  }

  const changeState = () => {
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
      
    })
    .then((response) => response.json())
    .then((data) => {
      setStories(data.data.map((elemento)=> elemento));
    })
  }

  return (
        <>
            <div id={styles.cardContainer}> 
              {tasks.length==0?
              <p>cargando...</p>:
              tasks.map((elemento) => 
              <div className={styles.story}>
              <div className={styles.inputAndName}>
                <input className={styles.checkbox} type='checkbox' checked={elemento.done}/>
                {elemento.name}
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
