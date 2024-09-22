import React, { useState, useEffect } from 'react'
import Input from '../../atoms/Input'
import Boton from '../../atoms/Boton'
import styles from './Formulario.module.css'

export default function Formulario({addTask}) {

  const [value, setValue] = useState("");
  const [scroll, setScroll] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if(value.trim()!=''){
      addTask(value);
      setValue("");
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id={scroll? styles.PrinDiv:styles.PrinDiv1}>
      <form action="" onSubmit={(e) => onSubmit(e)} id={styles.form0}>
        <div id={styles.formContainer}>
          <Input value={value} setValue={setValue}></Input>
          <Boton></Boton>
        </div>
        <div id={scroll? styles.fondoForm1 : styles.fondoForm}></div>

      </form>
    </div>
  )
}