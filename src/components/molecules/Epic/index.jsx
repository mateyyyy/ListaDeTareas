import React from 'react'
import styles from './Epic.module.css'
import HeaderGoBack from '../HeaderGoBack'
import { useParams } from 'react-router-dom'


export default function Epic() {
  const {m} = useParams();
  const {n} = useParams();
  const stories = ['Story 1 ','Story 2','Story 3']

  return (<>
    <HeaderGoBack titulo={"Epica : " + m}></HeaderGoBack>
    <div>
      {stories.map((story, index)=>
      <div>{story}</div>
      )}
    </div>
    </>
  )
}
