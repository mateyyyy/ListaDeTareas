import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'

export default function Projects() {

    const proyectos = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'];

    const lookProjects = () => {
      fetch("https://lamansysfaketaskmanagerapi.onrender.com/api/projects", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('token'),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

  return (
    <>
      <div id={styles.PrinDivProject}>
        <button onClick={lookProjects}>GET PROJECTS</button>
        <div id={styles.cardContainer}> 
            {proyectos.map((name, index) => (
                <Link to={`/my-projects/${index + 1}`} className={styles.card}>
                      {name}
                  </Link>
            ))}
        </div>
    </div>
    </>
  )
}
