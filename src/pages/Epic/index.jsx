import React, { useState } from 'react'
import styles from './Epic.module.css'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'
import InfoDisplay from '../../components/molecules/ProjectInfo'
import AddForm from '../../components/molecules/AddForm'

export default function Epic() {
  const {m} = useParams();
  const {n} = useParams();
  const [stories,setStories] = useState([]);
  const [epic, setEpic] = useState([]);
  const [newState, setNewState] = useState(0);

  const updateState = () => {
    setNewState(newState+1);
  }



  useEffect(()=>{
    get(`/epics/${m}/stories`, setStories);

    get(`/epics/${m}`, setEpic);
  },[m, newState]);


  return (<>
    <HeaderGoBack titulo={"Epica"}></HeaderGoBack>
    <AddForm type={"stories"} idEpic={m} updateState={updateState}></AddForm>
    {epic.length!=0?
    (
      <>
      <InfoDisplay element={epic}></InfoDisplay>
      <CardContainer elements={stories}></CardContainer>
      </>
    )
      :
    (<p>CARGANDO...</p>)
    }
    
    </>
  )
}
