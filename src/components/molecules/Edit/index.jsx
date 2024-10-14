import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import styles from './Edit.module.css';
import { patch } from '../../../utils/ApiRequests';

export default function Edit({ url,updateState }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [showForm, setShowForm] = useState(false);

    const editTask = (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe y recargue la página

        if(name!='' || description!=''){
            const body = {
                "name": name,
                "description": description,
            };
        
            patch(url, body).then((data) => {
                console.log(data);
                // Aquí puedes manejar el cierre del formulario o la actualización del estado
                setShowForm(false); // Opcional: cerrar el formulario tras editar
                setName(''); // Opcional: limpiar los inputs tras editar
                setDescription('');
                updateState();
            });
        }
        else{
            setShowForm(false);
        }
    };

    return (
        <>
            <button className={styles.editButon} onClick={() => setShowForm(!showForm)}>
                <FaPencilAlt style={{ fontSize: '1.5rem' }} />
            </button>
            {showForm && (
                <div id={styles.formContainer}>
                    <h2>EDIT</h2>
                    <form onSubmit={editTask} id={styles.form}>
                        <input
                            type="text"
                            placeholder='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit">Editar</button>
                    </form>
                </div>
            )}
        </>
    );
}
