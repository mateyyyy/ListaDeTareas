import React, { useContext } from 'react';
import styles from './MenuDesplegado.module.css';
import { MenuContext } from '../VentanaPrincipal';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function MenuDesplegado() {
    const { isOpen, setIsOpen } = useContext(MenuContext);

    return (
        <>
            <div id={styles.PrinDiv} className={isOpen ? styles.Visible : styles.NotVisible}>
                <div id={styles.Encabezado}>
                    <button onClick={() => setIsOpen(!isOpen)} className={styles.botonNav}>
                        <IoIosArrowBack />
                    </button>
                    <h1>Marca</h1>
                </div>
                <div id={styles.Nav}>
                    <Link to={"/"} onClick={() => setIsOpen(false)}>
                        <button className={styles.botonNav}>Inicio</button>
                    </Link>
                    <Link to={"/my-projects"} onClick={() => setIsOpen(false)}>
                        <button className={styles.botonNav}>Mis proyectos</button>
                    </Link>
                    <Link to={"/my-stories"} onClick={() => setIsOpen(false)}>
                        <button className={styles.botonNav}>Mis historias</button>
                    </Link>
                </div>
                <div id={styles.userProfile}>
                    <Link to={"/settings"} onClick={() => setIsOpen(false)}>
                        <button className={styles.botonNav}>Perfil</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
