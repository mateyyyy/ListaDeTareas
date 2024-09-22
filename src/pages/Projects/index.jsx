import React from 'react'
import Project from '../../components/molecules/Project'
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'


export default function Projects() {

    const proyectos = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'];

  return (
    <>
      <div id={styles.PrinDivProject}>
        <div id={styles.cardContainer}> 
            {proyectos.map((name, index) => (
                <Link to={`project-${index + 1}`}><div className={styles.card}>{name}</div></Link>
            ))}
        </div>
    </div>
    </>
  )
}
