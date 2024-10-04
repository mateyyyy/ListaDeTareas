import React, { useEffect,useState } from 'react'
import styles from './StoriesGral.module.css'
import Card from '../../components/molecules/Card';

export default function StoriesGral() {
    const [stories, setStories] = useState([]); 
    useEffect(()=>{
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token'),
      }})
    .then((response) => response.json())
    .then((data) => {
      setStories(data.data.map((elemento) => elemento));
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    },[]);

  return (
    <div>
      <h3>Historias de usuario : </h3>
      <div id={styles.PrinDivProject}>
      <div id={styles.cardContainer}> 
        {stories.map((story)=>
          <Card content={story.name}></Card>
        )}
      </div>
      </div>
    </div>
  )
}
