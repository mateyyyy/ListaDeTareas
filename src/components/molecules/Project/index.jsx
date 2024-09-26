import React, { useState } from 'react'
import styles from './Project.module.css'
import { Link, useParams } from 'react-router-dom'
import HeaderGoBack from '../HeaderGoBack'
import { useEffect } from 'react'

export default function Project() {

  const { n } = useParams();
  const Epicas = ['Epica 1','Epica 2','Epica 3'];
  const [epics,setEpics] = useState([]); 

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
        setEpics(data.data.map((elemento)=> elemento.name));
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },[n]);

  return (
    <>
      <HeaderGoBack titulo={"Proyecto : " + n}></HeaderGoBack>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus repudiandae illum necessitatibus quidem saepe. A reprehenderit, repellat accusamus quo facere molestiae ullam fugit tenetur vitae veritatis deserunt esse sint?</p>
      <div id={styles.PrinDivProject}>
        <div id={styles.CardContainer}>
          {epics.map((Epica, index)=> 
            <Link to={`${index + 1}`} className={styles.card}>{Epica}</Link>
          )}
        </div>
      </div>
    </>
  )
}
