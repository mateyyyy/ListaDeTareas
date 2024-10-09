import React, { useState,useEffect } from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'
import InfoDisplay from '../../components/molecules/ProjectInfo'
import AddForm from '../../components/molecules/AddForm'

export default function Project() {

  const { n } = useParams();
  const [epics,setEpics] = useState([]); 
  const [project, setProject] = useState([]);

  const [newState, setNewState] = useState(0);

  const updateState = () => {
    setNewState(newState+1);
  }

  project.description;

  useEffect(()=>{
    get(`/projects/${n}/epics`, setEpics);      
    get(`/projects/${n}`, setProject)
  },[n, newState]);

  return (
    <>
      <HeaderGoBack titulo={"Proyecto"}></HeaderGoBack>
      <AddForm type={'epics'} updateState={updateState} idProject={n}></AddForm>

      {project.length == 0 ? 
        <p>CARGANDO...</p> 
      : 
      <>
      <InfoDisplay element={project}></InfoDisplay>
      <CardContainer elements={epics}></CardContainer>   
      </>
      }
      
    </>
  )
}
