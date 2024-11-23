import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import styles from './Edit.module.scss';
import { patch } from '../../../utils/ApiRequests';

export default function Edit({ url,updateState, nameElement, descriptionElement }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [showForm, setShowForm] = useState(false);

    const editTask = (e) => {
        e.preventDefault(); 

        if(name!='' || description!=''){
            const body = {
                "name": name,
                "description": description,
            };
        
            patch(url, body).then((data) => {
                console.log(data);
                setShowForm(false);
                setName('');
                setDescription('');
                updateState();
            });
        }
        else{
            setShowForm(false);
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setName('');
        setDescription('');
    };

    return (
        <>
            <button className={styles.editButon} onClick={() => setShowForm(!showForm)}>
                <FaPencilAlt style={{ fontSize: '1.5rem' }} />
            </button>
            {showForm && (
                <div id={styles.formContainer}>
                    <h2>EDIT</h2>
                    <form onSubmit={editTask} className={styles.form}>
                        <input
                            type="text"
                            placeholder={nameElement != '' ? nameElement : 'name'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder={descriptionElement != '' ? descriptionElement : 'descripcion'}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className={styles.buttonContainer}>
                            <button type="submit">Save Changes</button>
                            <button type="button" className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
                        </div>
                        </form>
                </div>
            )}
        </>
    );
}
