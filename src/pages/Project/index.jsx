import React, { useState,useEffect } from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'

export default function Project() {

  const { n } = useParams();
  const [epics,setEpics] = useState([]); 
  const [project, setProject] = useState([]);
  project.description;

  useEffect(()=>{
    get(`/projects/${n}/epics`)
      .then((response) => response.json())
      .then((data) => {
        setEpics(data.data.map((elemento)=> elemento));
      });
      
    get(`/projects/${n}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data.data);
        console.log(data);
      })

  },[n]);

  return (
    <>
      <HeaderGoBack titulo={"Proyecto : " + (epics.length ==0 ? "Cargando" : project.name)}></HeaderGoBack>
      {project.length == 0 ? 
        <p>CARGANDO...</p> 
      : 
      <>
      <CardContainer elements={epics}></CardContainer>   
      </>
      }
      
    </>
  )
}
