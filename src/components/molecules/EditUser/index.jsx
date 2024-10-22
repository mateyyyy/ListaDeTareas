import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import styles from './EditUser.module.scss';
import { patch } from '../../../utils/ApiRequests';

export default function EditUser({ url, updateState }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showForm, setShowForm] = useState(false);

    const editTask = (e) => {
        e.preventDefault(); 

        const body = {
            name: {
                first: first,
                last: last,
            },
            username,
            email,
            password,
        };
            patch(url, body).then((data) => {
                console.log(data);
                setShowForm(false);
                setName('');
                setUsername('');
                setFirst('');
                setLast('');
                setEmail('');
                setPassword('');
                setDescription('');
                updateState();
            });
        
    };

    const handleCancel = () => {
        setShowForm(false); // Cierra el formulario
        // Restablecer campos si es necesario
        setName('');
        setUsername('');
        setFirst('');
        setLast('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <button className={styles.editButton} onClick={() => setShowForm(!showForm)}>
                <FaPencilAlt style={{ fontSize: '1.5rem' }} />
            </button>
            {showForm && (
                <div className={styles.formContainer}>
                    <h2>Edit User</h2>
                    <form onSubmit={editTask} className={styles.form}>
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='First Name'
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Last Name'
                            value={last}
                            onChange={(e) => setLast(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
