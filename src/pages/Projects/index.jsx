import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'

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
          setProyectos(data.data.map((elemento)=> elemento));
          console.log("Data : ");
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[])

  return (
    <>
      <div id={styles.PrinDivProject}>
        <div id={styles.cardContainer}> 
            {proyectos.map((project, index) => (
                <Link to={`/my-projects/${project._id}`} className={styles.card} key={project._id}>
                  {project.name}
                </Link>
            ))}
        </div>
    </div>
    </>
  )
}
