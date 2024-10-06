import React, { useState } from 'react'
import styles from './Epic.module.css'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'

export default function Epic() {
  const {m} = useParams();
  const {n} = useParams();
  const [stories,setStories] = useState([]);
  const [epic, setEpic] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(()=>{
    get(`/epics/${m}/stories`)
    .then((response) => response.json())
    .then((data) => {
      setStories(data.data.map((elemento)=> elemento))
      if(data.data.length==0){
        setIsEmpty(true);
      }
      else{
        setIsEmpty(false);
      }
    })

    get(`/epics/${m}`)
    .then((response) => response.json())
    .then((data) => {
      setEpic(data.data);
    });
  },[m]);


  return (<>
    <HeaderGoBack titulo={"Epica : " + (epic.length==0? "Cargando" : epic.name)}></HeaderGoBack>
    
    {!isEmpty?
    (
      <CardContainer elements={stories}></CardContainer>   
    )
      :
    (<p>No hay historias cargadas...</p>)
    }
    
    </>
  )
}
