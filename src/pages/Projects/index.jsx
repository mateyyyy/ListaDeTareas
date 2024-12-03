import React, { useEffect, useState } from 'react'
import CardContainer from '../../components/molecules/CardContainer';
import { get } from '../../utils/ApiRequests';
import AddForm from '../../components/molecules/AddForm';
import Loading from '../../components/atoms/Loading';
import styles from './Projects.module.css'

export default function Projects() {
    const [proyectos, setProyectos] = useState(undefined); 
    const [newState, setNewState] = useState(0);
    const [blur, setBlur] = useState(false);

    const updateState = () => {
      setNewState(newState+1);
    }

    useEffect(()=>{

      get(`/projects/user/${localStorage.getItem('userID')}`, setProyectos);

      const interval = setInterval(() => {
        get(`/projects/user/${localStorage.getItem('userID')}`, setProyectos);
      }, 2000);

        return () => clearInterval(interval);

    },[])

    return (
      <div id={styles.prinDiv}>
        <AddForm type={'projects'} updateState={updateState} blur={blur} setBlur={setBlur}></AddForm>

        {proyectos == undefined ? 
        <Loading/> 
          :
        ( 
          proyectos.length > 0 ?
            <CardContainer elements={proyectos} blur={blur}></CardContainer>
          : 
            <p>No hay proyectos disponibles</p>
        )
          
        }
      </div>
    )
    
}
