import React from 'react'
import Card from '../Card'
import styles from './CardContainer.module.css'

export default function CardContainer({elements}) {
  return (
    <div id={styles.PrinDivProject}>
      <div id={styles.cardContainer}> 
        {elements.map((element)=>
          <Card url={element._id} content={element.name} key={element._id}></Card>
        )}
      </div>
    </div>
  )
}
