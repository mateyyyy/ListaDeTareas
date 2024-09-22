import React from 'react'
import styles from './Project.module.css'
export default function index({ name }) {
  return (
    <div id={styles.CardContainer}>
        <h2>{name}</h2>
    </div>
  )
}
