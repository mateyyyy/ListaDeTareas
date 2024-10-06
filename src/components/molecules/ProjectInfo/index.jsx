import React, { useState } from 'react'
import styles from './InfoDisplay.module.css'
import Card from '../Card'
export default function InfoDisplay({element}) {

  const [allContent, setAllContent] = useState(false);
  return (
    <div id={styles.PrinDiv}>
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
    </div>
  )
}
