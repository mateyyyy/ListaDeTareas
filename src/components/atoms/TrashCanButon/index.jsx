import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import styles from './TrashCanButon.module.css'

export default function TrashCanButon({deleteTask}) {
  return (
    <button onClick={deleteTask} id={styles.TrashCanButon}><FaRegTrashCan/></button>
  )
}
