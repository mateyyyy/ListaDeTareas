import React from 'react'
import styles from './InfoDisplay.module.css'
import Card from '../Card'
export default function InfoDisplay({element}) {
  return (
    <div id={styles.PrinDiv}>
        <Card content={"Titulo : Hoasd \n\r Descripcion : Hola como te va"} ></Card>
    </div>
  )
}
