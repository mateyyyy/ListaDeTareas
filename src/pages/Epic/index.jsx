import React, { createContext, useState } from 'react'
import styles from './Epic.module.css'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CardContainer from '../../components/molecules/CardContainer'
import { get } from '../../utils/ApiRequests'
import InfoDisplay from '../../components/molecules/ProjectInfo'
import AddForm from '../../components/molecules/AddForm'
import Edit from '../../components/molecules/Edit'
import Loading from '../../components/atoms/Loading';

export const BlurContext = createContext();

export default function Epic() {
  const {m} = useParams();
  const {n} = useParams();
  const [stories,setStories] = useState([]);
  const [epic, setEpic] = useState([]);
  const [newState, setNewState] = useState(0);
  const [blur, setBlur] = useState(false);

  const updateState = () => {
    setNewState(newState+1);
  }



  useEffect(()=>{
    get(`/epics/${m}/stories`, setStories);

    get(`/epics/${m}`, setEpic);
  },[m, newState]);


  return (<>
    <HeaderGoBack titulo={"Epica"}></HeaderGoBack>
    <BlurContext.Provider value={{ blur, setBlur }}>
        
      {epic.length!=0?
      (
        <>
          <InfoDisplay element={epic} url={'epics'} updateState={updateState} blur={blur}></InfoDisplay>
          <AddForm type={"stories"} idEpic={m} updateState={updateState} blur={blur} setBlur={setBlur}></AddForm>
        </>
      ):        
      <Loading/>
  }

      {stories.length!=0? <CardContainer elements={stories} blur={blur}></CardContainer> : null}    
    </BlurContext.Provider>

    </>
  )
}
