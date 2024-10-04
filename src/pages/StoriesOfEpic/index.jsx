import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import Card from '../../components/molecules/Card';
import styles from './StoriesOfEpic.module.css'
import Stories from '../../components/molecules/Stories';

export default function StoriesOfEpic() {
  const {m} = useParams();
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
        setTasks(data.data.map((elemento) => elemento)),
        console.log(data);
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
        <Stories tasks={tasks}></Stories>
      </div>
 </>
  )
}
