import React from 'react'
import Card from '../Card'
import styles from './CardContainer.module.css'

export default function CardContainer({elements}) {
  return (
    <div id={styles.PrinDivProject}>
      {elements.length!=undefined ? <div id={styles.cardContainer}> 
        {elements.map((element)=>
          <Card url={element._id} content={element.name} key={element._id}></Card>
        )}
      </div> : null}
    </div>
  )
}
