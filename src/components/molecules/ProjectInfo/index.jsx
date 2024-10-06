import React from 'react'
import styles from './InfoDisplay.module.css'
import Card from '../Card'
export default function InfoDisplay({element}) {
  return (
    <div id={styles.PrinDiv}>
        <Card content={ 
          <>
            <h3>Nombre : {element.name}</h3>
            <p>Descripcion : {element.description.slice(0,25)}</p>
          </>
      } ></Card>
    </div>
  )
}
