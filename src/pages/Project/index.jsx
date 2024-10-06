import React, { useState,useEffect } from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'
import InfoDisplay from '../../components/molecules/ProjectInfo'
export default function Project() {

  const { n } = useParams();
  const [epics,setEpics] = useState([]); 
  const [project, setProject] = useState([]);
  project.description;

  useEffect(()=>{
    get(`/projects/${n}/epics`, setEpics);
    console.log(epics);
      
    get(`/projects/${n}`, setProject)
    console.log("proyecto : " + project);
  },[n]);

  return (
    <>
      <HeaderGoBack titulo={"Proyecto : " + (epics.length ==0 ? "Cargando" : project.name)}></HeaderGoBack>
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
