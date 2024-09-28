import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import Card from '../../components/molecules/Card';
import styles from './StoriesOfEpic.module.css'
export default function StoriesOfEpic() {
  const {m} = useParams(); //EPIC ID
  const {j} = useParams();

  const [tasks, setTasks] = useState([]);

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
        setTasks(data.data.map((elemento) => elemento));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },[])

  return (
    <>
      <HeaderGoBack titulo={"Historias de usuario"}>
      </HeaderGoBack>
      <div id={styles.PrinDivProject}>
        <div id={styles.cardContainer}> 
          {tasks.length==0?
          <p>cargando...</p>:
          tasks.map((elemento) => <Card content={elemento.name}></Card>)}
        </div>
      </div>
 </>
  )
}
