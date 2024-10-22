import React, { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
          "username" : username,
          "password": password
        }
        
        fetch("http://localhost:3000/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            console.log('token : ' + data.data.token);
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('userID', data.data.user._id);
            navigate('/');
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
                    <input placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}} className={styles.Input} type="text" name="" id="" />
                    <input placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} className={styles.Input} type="password" name="" id="" />
                </div>
                <button id={styles.Buton}>Login</button>
            </form>
        </div>
    </div>
  )
}
