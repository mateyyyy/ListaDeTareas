import React, { useEffect, useState } from 'react'
import CardContainer from '../../components/molecules/CardContainer';
import { get } from '../../utils/ApiRequests';
import AddForm from '../../components/molecules/AddForm';

export default function Projects() {
    const [proyectos, setProyectos] = useState([]); 
    const [newState, setNewState] = useState(0);

    const updateState = () => {
      setNewState(newState+1);
    }

    useEffect(()=>{
        get('/projects', setProyectos);
    },[newState])

    return (
      <>
        <AddForm type={'projects'} updateState={updateState}></AddForm>
        {proyectos.length > 0 ?
          <CardContainer elements={proyectos}></CardContainer>
        : 
          <p>No hay proyectos disponibles</p>
        }
      </>
    )
    
}
