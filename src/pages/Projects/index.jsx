import React, { useEffect, useState } from 'react'
import CardContainer from '../../components/molecules/CardContainer';
import { get } from '../../utils/ApiRequests';

export default function Projects() {
    const [proyectos, setProyectos] = useState([]); 

    useEffect(()=>{
        get('/projects', setProyectos);
    },[])

  return (
    <>
      <CardContainer elements={proyectos}></CardContainer>
    </>
  )
}
