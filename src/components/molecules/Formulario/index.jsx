import React, { useState, useEffect } from 'react'
import Input from '../../atoms/Input'
import Boton from '../../atoms/Boton'
import styles from './Formulario.module.css'

export default function Formulario({addTask}) {

  const [value, setValue] = useState("");
  const [scroll, setScroll] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
    addTask(value);
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
      <form action="" onSubmit={(e) => onSubmit(e)} id={scroll? styles.form1:styles.form0}>
        <Input value={value} setValue={setValue} ></Input>
        <Boton></Boton>
      </form>
    </div>
  )
}