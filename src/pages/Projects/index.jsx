import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'
import Card from '../../components/molecules/Card';

export default function Projects() {
    const [proyectos, setProyectos] = useState([]); 

    useEffect(()=>{
      fetch("https://lamansysfaketaskmanagerapi.onrender.com/api/projects", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('token'),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProyectos(data.data.map((elemento) => elemento));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[])

  return (
    <>
      <div id={styles.PrinDivProject}>
        <div id={styles.cardContainer}> 
            {proyectos.length==0 ? 
            <p>Cargando proyectos</p>:
            proyectos.map((project, index) => (
              <Card key={project.id} content={project.name} url={`/my-projects/${project._id}`}></Card>
            ))}
        </div>
    </div>
    </>
  )
}
