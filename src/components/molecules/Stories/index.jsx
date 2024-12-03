import React, { useState } from 'react'
import styles from './Stories.module.scss'
import DeleteButon from '../DeleteButton';
import Edit from '../Edit';

export default function Stories({ tasks, updateState, blur }) {
  let actualDate = Date();
  actualDate = new Date(actualDate);
  const changeState = (task) => {
    console.log(task.done);
    const state = !task.done;

    fetch(`http://localhost:3000/tasks/${task._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        done: state,
      })
    })
      .then((response) => response.json())
      .then(() => {
        updateState();
      })

  }

  return (
    <>
      <div id={styles.cardContainer} className={blur ? styles.setBlur : null}>
        {tasks.map((elemento) =>
          <div key={elemento._id} className={styles.story}>
            <div id={styles.textAndButtons}>
              <div className={styles.inputAndName}>
                <input onChange={() => { changeState(elemento) }} className={styles.checkbox} type='checkbox' checked={elemento.done} />
                <h6 className={elemento.done ? styles.marked : ''}>{elemento.name.slice(0, 25)}</h6>
              </div>
              <div className={styles.editDel}>
                <Edit url={`/tasks/${elemento._id}`} updateState={updateState} nameElement={elemento.name} descriptionElement={elemento.description} date={elemento.dueDate}></Edit>
                <DeleteButon url={`/tasks/${elemento._id}`} updateState={updateState} type={'task'}></DeleteButon>
              </div>
            </div>
            {elemento.description != null ?
              <>
                <div className={styles.divisor}></div>
                <div className={styles.descripcionContainer}>
                  <p>{elemento.description.slice(0, 25)}</p>
                  <p className={new Date(elemento.dueDate).getTime() >= actualDate.getTime() ? styles.fechaGreen : styles.fechaPasada}>Fecha limite : {elemento.dueDate.split('T')[0]}</p>


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
