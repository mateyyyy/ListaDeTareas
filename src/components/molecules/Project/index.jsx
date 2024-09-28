import React, { useState } from 'react'
import styles from './Project.module.css'
import { Link, useParams } from 'react-router-dom'
import HeaderGoBack from '../HeaderGoBack'
import { useEffect } from 'react'
import Card from '../Card'

export default function Project() {

  const { n } = useParams();
  const [epics,setEpics] = useState([]); 
  const [project, setProject] = useState([]);

  useEffect(()=>{
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${n}/epics`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEpics(data.data.map((elemento)=> elemento));
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${n}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('token'),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProject(data.data);
          console.log(data);
        })

  },[n]);

  return (
    <>
      <HeaderGoBack titulo={"Proyecto : " + (epics.length ==0 ? "Cargando" : project.name)}></HeaderGoBack>
      <div id={styles.projectInfo}>
        <h3>Descripcion : {project.description}</h3>
        <span>{project.icon}</span>

      </div>
      <h2>Epicas del proyecto : </h2>
      <div id={styles.PrinDivProject}>
        <div id={styles.CardContainer}>
          {epics.length==0 ? 
          <p>Cargando historias de usuario </p> : epics.map((Epica)=>
            <Card url={Epica._id} content={Epica.name}></Card>
          )}
        </div>
      </div>
    </>
  )
}
