import React, { useState,useEffect } from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'
import InfoDisplay from '../../components/molecules/ProjectInfo'
import AddForm from '../../components/molecules/AddForm'
import Loading from '../../components/atoms/Loading';

export default function Project() {

  const { n } = useParams();
  const [epics,setEpics] = useState(undefined); 
  const [project, setProject] = useState(undefined);
  const [blur, setBlur] = useState(false);

  const [newState, setNewState] = useState(0);

  const updateState = () => {
    setNewState(newState+1);
  }

  useEffect(()=>{
    get(`/projects/${n}/epics`, setEpics);
    get(`/projects/${n}`, setProject);
  },[n, newState]);

  return (
    <>
      <HeaderGoBack titulo={"Proyecto"}></HeaderGoBack>      

      {project != undefined ?           
        <>
          <InfoDisplay element={project} url={'projects'} updateState={updateState} blur={blur}></InfoDisplay>
        </>
      : <Loading/>
      }    
      <AddForm type={'epics'} updateState={updateState} idProject={n} setBlur={setBlur} blur={blur}></AddForm>

      {epics != undefined ? 
      (  
        epics.length>0 ? (
        <>
          <CardContainer elements={epics} blur={blur}></CardContainer>  
        </>) : (
        <p>No hay epicas...</p>)
      ):
      <Loading></Loading>
      
    }

      
    </>
  )
}
