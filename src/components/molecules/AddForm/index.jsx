import React, { useContext, useState } from 'react'
import styles from './AddForm.module.scss'
import { post } from '../../../utils/ApiRequests';
import { bodySet } from '../../../utils/bodySetter';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddForm({ type, updateState, idProject, idEpic, idStory, setBlur, blur }) {

  const [showForm, setShowForm] = useState(false); 
  const [showError, setShowError] = useState(false); 
  const [errMessage, setErrMessage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const add = (e) => {
    e.preventDefault();
    if(name=='' && description==''){
      setShowForm(false)
      setBlur(false)
    }
    else{
    const bodySend = bodySet(type, name, description, idProject, idEpic, idStory, startDate );
    console.log(bodySend);
    post(`/${type}`, bodySend)
      .then((data) => {
          if(data.status!="fail" && data.status!="error"){
          console.log(data),
          updateState(),
          setShowForm(false)
          setBlur(false)
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
        setName('');
        setDescription('');
      })
    }
  }

  return (
    <div id={styles.PrinDivProject} className={showForm ? styles.floatOpened : null}>
        <div id={styles.add}><button onClick={() => {setShowForm(!showForm), setBlur(!blur)}}>ADD {type}</button></div>

        {showForm? <div id={styles.formContainer}>
          <h2>Agregar {type}</h2>
          <hr />
          <form action="" id={styles.form} onSubmit={(e) => {add(e), setBlur(!blur)}}>
            {showError? <h3>Error : {errMessage}</h3>: null}
            <div className={styles.labelCont}><label htmlFor="">Nombre</label></div>
          
            <input type="text" className={styles.input} placeholder='Nombre' value={name}  onChange={(e) => setName(e.target.value)}/>
            <div className={styles.labelCont}><label htmlFor="">Descripcion</label></div>
            <input type="text" className={styles.input} placeholder='Descripcion' value={description} onChange={(e) => setDescription(e.target.value)}/>
            {idStory?               
            <>
            <div className={styles.labelCont}><label htmlFor="">Fecha</label></div>
            <div id={styles.datePicker}>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="yyyy-MM-dd"/></div>
            </>
            : null}
            <button id={styles.addButton}>ADD</button>
            <button id={styles.cancelButton} onClick={() => {setShowForm(false), setBlur(!blur)}}>CANCEL</button>

          </form>
        </div>: null}
    </div>
  )
}
