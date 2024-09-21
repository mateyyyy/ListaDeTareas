import React, { useState, useEffect } from 'react'
import {inputEntrada} from './Input.module.css'

export default function Input({ value,setValue }) {

  const [placeHolder, setPlaceHolder] = useState(''); 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setPlaceHolder('Ingrese el nombre de la tarea');
      } else {
        setPlaceHolder('');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <input type="text" placeholder={placeHolder} value={value} id={inputEntrada} onChange={(e) => (setValue(e.target.value))}/>
  ) 
}
