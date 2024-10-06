import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { useLocation } from 'react-router-dom'

export default function Card({url, content}) {
    const location = useLocation();

  return (
    <>
    {url ? <><Link to={`${url}`} className={styles.card}>{content}</Link></> 
      : 
    <div className={styles.card}>{content} {}</div>}
    </>
  )
}
