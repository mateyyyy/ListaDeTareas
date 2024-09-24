import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'

export default function Projects() {

    const proyectos = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'];

  return (
    <>
      <div id={styles.PrinDivProject}>
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
