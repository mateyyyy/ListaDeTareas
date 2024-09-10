import React, { useState } from 'react'
import Input from '../../atoms/Input'
import Boton from '../../atoms/Boton'
import styles from './Formulario.module.css'

export default function Formulario({addTask}) {

  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
    addTask(value);
  }

  return (
    <div id={styles.PrinDiv}>
      <form action="" onSubmit={(e) => onSubmit(e)}>
        <Input value={value} setValue={setValue}></Input>
        <Boton></Boton>
      </form>
    </div>
  )
}