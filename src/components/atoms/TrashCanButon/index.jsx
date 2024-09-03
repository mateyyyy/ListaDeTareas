import React from 'react'
import { MdDelete } from 'react-icons/md';


export default function TrashCanButon({deleteTask}) {
  return (
    <button onClick={deleteTask}><MdDelete/></button>
  )
}
