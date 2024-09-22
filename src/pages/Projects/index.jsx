import React from 'react'
import Project from '../../components/molecules/Project'

export default function Projects() {

    const proyectos = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'];

  return (
    <>
        <div>
            {proyectos.map((name, index) => (
                <Project name={name}/>
            ))}
        </div>
    </>
  )
}
