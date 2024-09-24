import React from 'react'
import styles from './Project.module.css'
import { Link, useParams } from 'react-router-dom'
import HeaderGoBack from '../HeaderGoBack'

export default function Project() {

  const { n } = useParams();
  const Epicas = ['Epica 1','Epica 2','Epica 3'];

  return (
    <>
      <HeaderGoBack titulo={"Proyecto : " + n}></HeaderGoBack>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus repudiandae illum necessitatibus quidem saepe. A reprehenderit, repellat accusamus quo facere molestiae ullam fugit tenetur vitae veritatis deserunt esse sint?</p>
      <div id={styles.PrinDivProject}>
        <div id={styles.CardContainer}>
          {Epicas.map((Epica, index)=> 
            <Link to={`${index + 1}`} className={styles.aLink}><div className={styles.card}>{Epica}</div></Link>
          )}
        </div>
      </div>
    </>
  )
}
