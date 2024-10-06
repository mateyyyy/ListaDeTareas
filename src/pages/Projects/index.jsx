import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'
import Card from '../../components/molecules/Card';
import CardContainer from '../../components/molecules/CardContainer';
import { get } from '../../utils/ApiRequests';

export default function Projects() {
    const [proyectos, setProyectos] = useState([]); 

    useEffect(()=>{
        get('/projects')
        .then((response) => response.json())
        .then((data) => {
          setProyectos(data.data.map((elemento) => elemento));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[])

  return (
    <>
      <CardContainer elements={proyectos}></CardContainer>
    </>
  )
}
