import React from 'react'
import JobBox from './JobBox'

export default {
  title: 'Job Box',
  component: JobBox
}

const JOB = {
  image: 'andeoIt',
  position: 'Desarrollador Full Stack',
  date: '01/10/2014 a la actualidad',
  description: 'Elicitación de requerimientos. Análisis técnico/funcional. \
    Documentación. Modelado e implementación de bases de datos. \
    Elaboración de prototipos. Diseño y maquetación front-end. \
    Programación de soluciones. Testing. Deployment y operación. \
    Mantenimiento de software.'
}

export const exampleJobBox = () => <JobBox
  image={JOB.image}
  position={JOB.position}
  date={JOB.date}
  description={JOB.description}
/>
