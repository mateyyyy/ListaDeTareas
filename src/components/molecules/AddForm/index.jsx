import React, { useState } from 'react'
import styles from './AddForm.module.css'
import { post } from '../../../utils/ApiRequests';
import { bodySet } from '../../../utils/bodySetter';
export default function AddForm({ type, updateState, idProject, idEpic }) {

  const [showForm, setShowForm] = useState(false); 
  const [showError, setShowError] = useState(false); 
  const [errMessage, setErrMessage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const add = (e) => {
    e.preventDefault();
    const bodySend = bodySet(type, name, description, idProject, idEpic );
    console.log(bodySend);
    post(`/${type}`, bodySend)
      .then((data) => {
          if(data.status!="fail" && data.status!="error"){
          console.log(data),
          updateState(),
          setShowForm(false)
          setShowError(false)
        }
        else{
          setShowError(true)
          if(type=='projects'){
            setErrMessage(data.data.name)
          }
          if(type=='epics'){
            setErrMessage(data.message.message)
          }
        }
      })
  }

  return (
    <div id={styles.PrinDivProject}>
        <div id={styles.add}><button onClick={() => (setShowForm(!showForm))}>ADD {type}</button></div>

        {showForm? <div id={styles.formContainer}>
          <h2>{type}</h2>
          <form action="" id={styles.form} onSubmit={(e) => (add(e))}>
            {showError? <h3>Error : {errMessage}</h3>: null}
            <input type="text" className={styles.input} placeholder='Nombre' value={name}  onChange={(e) => setName(e.target.value)}/>
            <input type="text" className={styles.input} placeholder='Descripcion' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button>ADD</button>
          </form>
        </div>: null}
    </div>
  )
}
