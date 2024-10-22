import React, { useEffect, useState } from 'react'

export default function Inicio() {
  const [name,setName] = useState('');

  const header = { 'Content-Type': 'application/json',
    'auth': localStorage.getItem('token')}

  useEffect(() => {
    fetch(`http://localhost:3000/users/${localStorage.getItem('userID')}`,{
      method: 'GET',
      headers: header,
  }).
    then((response) => response.json())
    .then((data) => {
      setName(data.data.name.first + ' ' + data.data.name.last )
    });
  },[])


  return (<>
      <div><h1>Bienvenido {name}</h1></div>
    </>
  )
}
