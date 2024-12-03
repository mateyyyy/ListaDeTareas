import React, { useEffect, useState } from 'react';
import styles from './Settings.module.scss';
import EditUser from '../../components/molecules/EditUser';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const [info, setInfo] = useState(null);
    const navigate = useNavigate();

    const header = {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
    };
    const [newState, setNewState] = useState(0);

    const cerrarSesion = () => {
        localStorage.setItem('token', null);
        navigate('/login');
    }

    const updateState = () => {
      setNewState(newState+1);
    }
    useEffect(() => {
        fetch(`https://taskswithexpress.onrender.com/users/${localStorage.getItem('userID')}`, {
            method: 'GET',
            headers: header,
        })
        .then((response) => response.json())
        .then((data) => {
            setInfo(data.data);
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });
    }, [newState]);

    return (
        <div className={styles.prinCont}>
            {info ? (
                <div className={styles.userInfoCont}>
                    <h2 className={styles.userName}>{info.name.first} {info.name.last}</h2>
                    <p className={styles.infoContp}><strong>Mail:</strong> {info.email}</p>
                    <p className={styles.infoContp}><strong>Usuario:</strong> {info.username}</p>
                <EditUser url={`/users/${localStorage.getItem('userID')}`} updateState={updateState}></EditUser>       
                <button onClick={() => {cerrarSesion()}}>Cerrar sesion</button>         
                </div>
                
            ) : (
                <p>Cargando información del usuario...</p>
            )}
        </div>
    );
}
