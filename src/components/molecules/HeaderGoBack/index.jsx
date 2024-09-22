import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function index({titulo}) {

  const navigate = useNavigate();

  return (
    <div id={styles.PrinDiv}>
          <button id={styles.HeaderButton} onClick={() => navigate(-1)}>
            < IoIosArrowBack/>
          </button>
        <h1 id={styles.HeaderH1}>{titulo}</h1>
    </div>
  )
}
