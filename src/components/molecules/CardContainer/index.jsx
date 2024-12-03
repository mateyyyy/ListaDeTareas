import React from 'react'
import Card from '../Card'
import styles from './CardContainer.module.scss'

export default function CardContainer({elements, blur}) {
  return (
    <div id={styles.PrinDivProject} className={blur? styles.setBlur: null}>
      {elements.length!=undefined ? <div id={styles.cardContainer}> 
        {elements.map((element)=>
          <Card url={element._id} content={element.name.slice(0,30)} key={element._id}></Card>
        )}
      </div> : null}
    </div>
  )
}
