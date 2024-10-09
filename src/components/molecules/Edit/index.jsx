import React, { useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import styles from './Edit.module.css';

export default function Edit() {

    const [showForm, setShowForm] = useState(false);

  return (<>
    <button className={styles.editButon} onClick={() => setShowForm(!showForm)}><FaPencilAlt style={{ fontSize: '1.5rem' }}></FaPencilAlt></button>
    {
        showForm? 
        <div id={styles.formContainer}>
            <h2>EDIT TASK</h2>
            <form action="">
                <input type="text" placeholder='name'/>
                <input type="text" placeholder='description'/>
            </form>
        </div> :
        null
    }

    </>)
}
