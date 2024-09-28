import React, { useState } from 'react'
import styles from './Epic.module.css'
import HeaderGoBack from '../HeaderGoBack'
import { useParams } from 'react-router-dom'
import Card from '../Card'
import { useEffect } from 'react'

export default function Epic() {
  const {m} = useParams();
  const {n} = useParams();
  const [stories,setStories] = useState([]);
  const [epic, setEpic] = useState([]);

  useEffect(()=>{
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${m}/stories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setStories(data.data.map((elemento)=> elemento));
    })

    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${m}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setEpic(data.data);
    });
  },[m]);


  return (<>
    <HeaderGoBack titulo={"Epica : " + (epic.length==0? "Cargando..." : epic.name)}></HeaderGoBack>
    <h2>{epic.description}</h2>
    <h3>Historias de usuario : </h3>
    <div id={styles.PrinDivProject}>
    <div id={styles.cardContainer}> 
      {stories.map((story)=>
        <Card url={story._id} content={story.name}></Card>
      )}
    </div>
    </div>
    </>
  )
}
