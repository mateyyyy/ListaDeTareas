import React, { useEffect, useState } from 'react'
import { get } from '../../utils/ApiRequests';
import Stories from '../../components/molecules/Stories';
import styles from './Inicio.module.scss';
import Loading from '../../components/atoms/Loading';

export default function Inicio() {
  const [name,setName] = useState('');
  const [tasks,setTasks] = useState([]);
  let loadTask = false;
  const [stories,setStories] = useState(undefined);
  let storiesIDs = [];

  const header = { 'Content-Type': 'application/json',
    'auth': localStorage.getItem('token')}
  const [newState, setNewState] = useState(0);

  const updateState = () => {
    setTasks([]);
    setNewState(newState+1);
  }


  useEffect(() => {
  fetch(`https://taskswithexpress.onrender.com/users/${localStorage.getItem('userID')}`, {
    method: 'GET',
    headers: header,
  })
    .then((response) => response.json())
    .then((data) => {
      setName(`${data.data.name.first} ${data.data.name.last}`);
    });
  fetch(`https://taskswithexpress.onrender.com/stories/user/${localStorage.getItem('userID')}`, {
    method: 'GET',
    headers: header,
  })
  .then((response) => response.json())
  .then((data) => {
    setStories(data.data);
    return data.data
  })
  .then((stories) => {
    stories.forEach((story) => {
      console.log(story._id);
      fetch(`https://taskswithexpress.onrender.com/stories/${story._id}/tasks`, {
        method: 'GET',
        headers: header,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTasks((prevTasks) => {
            const newTasks = data.data.filter(
              (task) => !prevTasks.some((prevTask) => prevTask._id === task._id) && !task.done
            );
            const updatedTasks = [...prevTasks, ...newTasks];
            return updatedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
          });
          loadTask = true;
        });

    });
  })
  

}, [newState]);



  return (<div id={styles.prinDiv}>
      <div id={styles.imgAndInfo}>
        <div id={styles.textDescription}>
          <h1>GESTIONA TUS PROYECTOS</h1>
          <p>Gestiona tus proyectos de manera sencilla y eficiente. Organiza tu trabajo dividiéndolo en épicas, 
            historias de usuario y tareas específicas. Marca las tareas completadas, establece fechas límite y 
            visualiza el progreso de cada proyecto. Diseñada para adaptarse a tus necesidades, esta herramienta 
            te ayuda a mantenerte enfocado y cumplir tus objetivos con claridad y control.
          </p>
        </div>
      <img src="src\assets\vectorInicio.png" alt="" width={'60%'}/>
      </div>
      <div id={styles.storiesCont}>
      <h2>TAREAS PENDIENTES DE {name.toLocaleUpperCase()} : </h2>
        <div id={styles.stories}>
          {!loadTask ? 
          tasks.length>0? 
          (
          <Stories tasks={tasks} updateState={updateState}></Stories>)
          :
          (<p>No hay tareas disponibles...</p>)
          : 
          <Loading/>
          }
        </div>
      </div>
    </div>
  )
}
