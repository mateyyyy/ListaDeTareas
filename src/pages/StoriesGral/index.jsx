import React, { useEffect,useState } from 'react'
import styles from './StoriesGral.module.css'
import Card from '../../components/molecules/Card';
import Loading from '../../components/atoms/Loading';
import { get } from '../../utils/ApiRequests';

export default function StoriesGral() {
    const [stories, setStories] = useState(undefined); 
    useEffect(()=>{ 
      get(`/stories/user/${localStorage.getItem('userID')}`, setStories);
    },[]);

  return (
    <div>
      <h3>Historias de usuario : </h3>
      <div id={styles.PrinDivProject}>
      <div id={styles.cardContainer}> 
        {stories==undefined? <Loading/> :  stories.map((story)=>
          <Card content={`Nombre : ${story.name.slice(0,25)} Descripcion : ${story.description}`}></Card>
        )}
       
      </div>
      </div>
    </div>
  )
}
