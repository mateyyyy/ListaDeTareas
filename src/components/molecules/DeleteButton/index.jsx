import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import styles from './DeleteButton.module.scss';
import { deleteFunc } from '../../../utils/ApiRequests';
import { useNavigate } from 'react-router-dom';
export default function DeleteButon({updateState, url,  type}) {

    const navigate = useNavigate();
    const [confirm, setConfirm] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errMessage, setErrMessage] = useState('');


    const deleteElement = (e) => {
        e.preventDefault();
        deleteFunc(url)
        .then((data) => {
            console.log(data);
            if(data.status=='success'){
                updateState();
                if(type!='task'){
                    navigate(-1);
                }
            }
            else{
                setShowError(true);
                setErrMessage(data.message);
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
                    <button id={styles.yesButton} onClick={(e) => deleteElement(e)}>YES</button>
                    <button id={styles.noButton} onClick={() => setConfirm(!confirm)}>NO</button>
                </div>            
                {showError ? <h3>{errMessage}</h3> : null}
            </div> 
            : 
            null
        }

    </div>
  )
}
