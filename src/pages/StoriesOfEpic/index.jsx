import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import Card from '../../components/molecules/Card';
import styles from './StoriesOfEpic.module.css'
import Stories from '../../components/molecules/Stories';

export default function StoriesOfEpic() {
  const {m} = useParams();
  const {j} = useParams();

  const [showForm, setShowForm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errMessage, setErrMessage] = useState('');


  const [tasks, setTasks] = useState([]);
  const [newState, setNewState] = useState(0);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');


  const addTask = (e) => {
    e.preventDefault();
    console.log(name);
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
      body:
      JSON.stringify({
        "done": false,
        "name": name,
        "description": description,
        "story": j,
        "created": "2022-04-10T21:59:24.063Z",
        "due": due,
      })
    })
      .then((response) => response.json())
      .then((data) => {
          if(data.status!="error"){
          console.log(data),
          setNewState(newState+1),
          setShowForm(false)
          setShowError(false)
        }
        else{
          setShowError(true),
          setErrMessage(data.message.message)
        }
      })
  }


  useEffect(() => {
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/stories/${j}/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.data.map((elemento) => elemento)),
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },[newState])

  return (
    <>
      <HeaderGoBack titulo={"Historias de usuario"}>
      </HeaderGoBack>
      <div id={styles.PrinDivProject}>

        <div id={styles.addTask}><button onClick={() => (setShowForm(!showForm))}>ADD TASK</button></div>

        {showForm? <div id={styles.formContainer}>
          <h2>TASK</h2>
          <form action="" id={styles.form} onSubmit={(e) => (addTask(e))}>
            {showError? <h3>Error : {errMessage}</h3>: null}
            <input type="text" className={styles.input} placeholder='Nombre' value={name}  onChange={(e) => setName(e.target.value)}/>
            <input type="text" className={styles.input} placeholder='Descripcion' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" className={styles.input} placeholder='Fecha limite' value={due}  onChange={(e) => setDue(e.target.value)}/>
            <button>ADD</button>
          </form>
        </div>: null}
        

        <Stories tasks={tasks} setNewState={setNewState} newState={newState}></Stories>
      </div>
 </>
  )
}
