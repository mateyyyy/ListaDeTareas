import React, { useEffect } from 'react'
import styles from './Login.module.css'

export default function Login() {

    const data = {
        "email": "waltermolina@msn.com",
        "username": "waltermolina",
        "password": "1234",
        "name": {
            "first": "Walter",
            "last": "Molina"
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Aquí puedes mandar los datos del formulario o los datos de ejemplo
        
    
        fetch('https://lamansysfaketaskmanagerapi.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

  return (
    <div id={styles.bodyGral}>
        <div id={styles.prinDiv}>
            <h1>LOGIN</h1>
            <p>Please enter your login and password</p>
            <form action="" onSubmit={handleSubmit} id={styles.formContainer}>
                <div id={styles.inputContainer}>
                    <input placeholder='Username' className={styles.Input} type="text" name="" id="" />
                    <input placeholder='Password' className={styles.Input} type="password" name="" id="" />
                </div>
                <button id={styles.Buton}>Login</button>
            </form>
        </div>
    </div>
  )
}
