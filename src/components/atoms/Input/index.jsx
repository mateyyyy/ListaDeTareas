import React from 'react'
import {inputEntrada} from './Input.module.css'

export default function Input({ value,setValue }) {
  return (
    <input type="text" value={value} id={inputEntrada} onChange={(e) => (setValue(e.target.value))}/>
  ) 
}
