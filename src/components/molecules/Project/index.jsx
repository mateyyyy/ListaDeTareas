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
  project.description;

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
      {epics.length == 0 ? 
        <h1>CARGANDO...</h1> 
      : 
      <>
      <div id={styles.projectInfo}>
        <h3>Descripcion : {project.description.length>50 ? 
        <>
          {project.description.slice(0, 50)}...
        </>
        :
          project.description
      }</h3>
      </div>

      <h2>Epicas del proyecto : </h2>
      <div id={styles.PrinDivProject}>
        <div id={styles.CardContainer}>
          {epics.map((Epica)=>
            <Card url={Epica._id} content={Epica.name}></Card>
          )}
        </div>
      </div></>
      }
      
    </>
  )
}
