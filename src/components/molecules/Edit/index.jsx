import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import styles from './Edit.module.scss';
import { patch } from '../../../utils/ApiRequests';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Edit({ url,updateState, nameElement, descriptionElement, date }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [startDate, setStartDate] = useState(date);

    const editTask = (e) => {
        e.preventDefault(); 

        if(name!='' || description!='' || date!=''){
            let body = {
                "name": name,
                "description": description,
            };
            if(date) {
                body = {
                    "name": name,
                    "description": description,
                    "dueDate": startDate
                };
            }
        
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
                    <div className={styles.labelCont}><label htmlFor="nombre">Nombre</label></div>
                        <input
                            name='nombre'
                            type="text"
                            placeholder={nameElement != '' ? nameElement : 'name'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className={styles.labelCont}><label htmlFor="">Descripcion</label></div>
                        <input
                            type="text"
                            placeholder={descriptionElement != '' ? descriptionElement : 'descripcion'}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {date?           
                        <>             
                        <div className={styles.labelCont}><label htmlFor="">Fecha</label></div>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="yyyy-MM-dd"/>
                        </>: null}


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
