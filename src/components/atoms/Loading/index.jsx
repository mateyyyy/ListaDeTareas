import React from 'react'
import styles from './Loading.module.scss'

export default function Loading() {
  return (
    <div id={styles.loadingCont}>
        <div id={styles.loading}></div>
    </div>
  )
}
