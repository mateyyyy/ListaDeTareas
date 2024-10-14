import React, { useState } from 'react'
import styles from './InfoDisplay.module.css'
import Card from '../Card'
import Edit from '../Edit';
import DeleteButton from '../DeleteButton';

export default function InfoDisplay({element, url, updateState}) {

  const [allContent, setAllContent] = useState(false);
  return (
    <div id={styles.PrinDiv}>
      <div id={styles.secDiv}>
      <button id={styles.buton} onClick={() => (setAllContent(!allContent))}>
        <Card content={ 
          <>
            <h3>Nombre : {element.name}</h3>
            {element.description!=null ?
              <p>Descripcion : {element.description.slice(0,25)}</p>
              :
              (null)}

            {allContent ?
            <div id={styles.FloatInfo}>
              <h3>Nombre : {element.name}</h3>
            {element.description!=null ?
              <p>Descripcion : {element.description}</p>
              :
              (null)}
              <p>ID : {element._id}</p>
              {element.members!=null?
              <p>Members : {element.members}</p>
              :null
              }
              {element.owner!=null?
              <p>Owner : {element.owner}</p>
              :
              null
              }

            </div>
            :
            null
          }
            
          </>
      }>
      </Card>
      </button>
      <div id={styles.iconCont}>
        <Edit url={`/${url}/${element._id}`} updateState={updateState}></Edit>
        <DeleteButton url={`/${url}/${element._id}`} updateState={updateState}></DeleteButton>
      </div>
      </div>
    </div>
  )
}
