import React, { useState } from 'react'
import styles from './Epic.module.css'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'
import InfoDisplay from '../../components/molecules/ProjectInfo'

export default function Epic() {
  const {m} = useParams();
  const {n} = useParams();
  const [stories,setStories] = useState([]);
  const [epic, setEpic] = useState([]);

  useEffect(()=>{
    get(`/epics/${m}/stories`, setStories);

    get(`/epics/${m}`, setEpic);
  },[m]);


  return (<>
    <HeaderGoBack titulo={"Epica"}></HeaderGoBack>
    
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
