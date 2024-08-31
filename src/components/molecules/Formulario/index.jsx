import React from 'react'
import Input from '../../atoms/Input'
import Boton from '../../atoms/Boton'
import styles from './Formulario.module.css'

export default function Formulario() {
  return (
    <div id={styles.PrinDiv}>
        <Input></Input>
        <Boton></Boton>
    </div>
  )
}
