import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import styles from './DeleteButton.module.css';
import { deleteFunc } from '../../../utils/ApiRequests';
export default function DeleteButon({updateState, url}) {

    const [confirm, setConfirm] = useState(false);
    const [showError, setShowError] = useState(false);


    const deleteElement = (e) => {
        e.preventDefault();
        deleteFunc(url)
        .then((data) => {
            if(data.status=='success'){
                updateState();
            }
            else{
                setShowError(!showError);
            }
        });
    }

  return (
    <div>
        <button id={styles.deleteButon} onClick={() => setConfirm(!confirm)}>
            <MdDelete style={{ fontSize: '1.5rem' }}/>
        </button>

        {confirm?
        
            <div id={styles.floatingDiv}>
                <h3>¿DELETE?</h3>
                <div id={styles.butonCont}>
                    <button onClick={(e) => deleteElement(e)}>YES</button>
                    <button onClick={() => setConfirm(!confirm)}>NO</button>
                </div>            
                {showError ? <h3>Hubo un error</h3> : null}
            </div> 
            : 
            null
        }

    </div>
  )
}
