import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MenuContext } from '../VentanaPrincipal';

export default function index({titulo}) {
  
  const {isOpen, setIsOpen} = useContext(MenuContext);

  return (
    <div id={styles.PrinDiv}>
        <button id={styles.HeaderButton} onClick={() => {setIsOpen(!isOpen)}}>
            <GiHamburgerMenu />
        </button>
        <h1 id={styles.HeaderH1}>{titulo}</h1>
    </div>
  )
}
