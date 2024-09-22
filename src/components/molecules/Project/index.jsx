import React from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom';


export default function Project() {

  const { n } = useParams();

  return (
    <div id={styles.CardContainer}>
        <h2>proyecto numero : {n}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus repudiandae illum necessitatibus quidem saepe. A reprehenderit, repellat accusamus quo facere molestiae ullam fugit tenetur vitae veritatis deserunt esse sint?</p>
    </div>
  )
}
