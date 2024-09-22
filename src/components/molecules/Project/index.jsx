import React from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../HeaderGoBack'

export default function Project() {

  const { n } = useParams();

  return (
    <div id={styles.CardContainer}>
      <HeaderGoBack titulo={"Proyecto : " + n}></HeaderGoBack>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus repudiandae illum necessitatibus quidem saepe. A reprehenderit, repellat accusamus quo facere molestiae ullam fugit tenetur vitae veritatis deserunt esse sint?</p>
    </div>
  )
}
