import React, { useState } from 'react'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom';
import { post } from '../../utils/ApiRequests';

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [register, setRegister] = useState(false);

    const handleRegister = (e) => {
      e.preventDefault();

      const data = {
        "username" : username,
        "password": password,
        "email" : email,
        "name" : {
          "first" : name,
          "last" : lastName
        } 
      }
      post('/users', data)
      .then((response) => 
        {if(response.status=='success'){
          setRegister(false);
        }
        else{
          setError(true);
          setMessage(response.message);
        }
      })
    }

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
            if(data.status == 'success'){
              console.log('Success:', data);
              console.log('token : ' + data.data.token);
              localStorage.setItem('token', data.data.token);
              localStorage.setItem('userID', data.data.user._id);
              navigate('/');
            }
            else{
              setError(true);
              setMessage(data.message);
            }
            
        })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

  return (
    <div id={styles.bodyGral}>
        <div id={styles.prinDiv}>
          <div id='loginRegister'>
            <button className={register ? styles.notSelected : styles.selected} onClick={() => setRegister(false)}>Login</button>
            <button className={register ? styles.selected : styles.notSelected} onClick={() => setRegister(true)}>Register</button>
          </div>

          {register ? <>
            <form action="" onSubmit={handleRegister} className={styles.formContainer}>
                <div id={styles.inputContainer}>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.Input} type="email" />
                    <input placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}} className={styles.Input} type="text" name="" id="" />
                    <input placeholder='Name' value={name} onChange={(e) => {setName(e.target.value)}} className={styles.Input} type="text" name="" id="" />
                    <input placeholder='Lastname' value={lastName} onChange={(e) => {setLastName(e.target.value)}} className={styles.Input} type="text" name="" id="" />
                  <input placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} className={styles.Input} type="password" name="" id="" />
                </div>
                <button className={styles.Buton}>Register</button>
            </form>
            {error? <p>Error : {message}</p> : null}
            
            </>
            :<>
            <p>Please enter your username and password</p> 
            <form action="" onSubmit={handleSubmit} className={styles.formContainer}>
                <div id={styles.inputContainer}>
                    <input placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}} className={styles.Input} type="text" name="" id="" />
                    <input placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} className={styles.Input} type="password" name="" id="" />
                </div>
                <button className={styles.Buton}>Login</button>
            </form>
            {error? <p>Error : {message}</p> : null}
            </>
            }
        </div>
    </div>
  )
}
