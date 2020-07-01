// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import Paragraph from 'components/Texts/Paragraph'
import Text from 'components/Texts/Text'
import ItQualityLogo from 'assets/images/jobs/it_quality.jpg'
import AndeoItLogo from 'assets/images/jobs/andeo_it.jpg'
import AeroLogo from 'assets/images/jobs/aero.jpg'

const JobsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

const JobBox = styled.div`
  border-radius: 8px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  margin: 0 20px 20px 0;

  > * {
    padding: 10px 20px;

    &:first-child {
      padding: 0;
      margin-bottom: 10px;
    }
  }

  &:last-child {
    margin: 0;
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`

function Experience() {
  return <Section>
    <Container align='center' col>
      <SectionTitle first='Mi' second='experiencia' />
      <JobsContainer>
        <JobBox>
          <img src={ItQualityLogo} alt='Logo de empresa IT Quality' />
          <Text size={18}>Responsable de calidad y seguridad</Text>
          <Text size={14} featured>18/09/2012 a 14/07/2017</Text>
          <Paragraph>
            Proyectar, desarrollar, implantar y evaluar el Sistema de Gestión de 
            la Calidad y Seguridad de la información. Planificar las tareas 
            vinculadas al Sistema de Gestión de Calidad conforme a sus objetivos 
            y prioridades. Identificar los recursos necesarios y suficientes para 
            ejecutar los proyectos de calidad. Coordinar las distintas tareas y 
            recursos que conforman el Sistema de gestión de Calidad y Seguridad de 
            la Información.
          </Paragraph>
        </JobBox>
        <JobBox>
          <img src={AndeoItLogo} alt="Logo de empresa AndeoIT"/>
          <Text size={18}>Desarrollador Full Stack</Text>
          <Text size={14} featured>01/10/2014 a la actualidad</Text>
          <Paragraph>
            Elicitación de requerimientos. Análisis técnico/funcional. 
            Documentación. Modelado e implementación de bases de datos. 
            Elaboración de prototipos. Diseño y maquetación front-end. 
            Programación de soluciones. Testing. Deployment y operación. 
            Mantenimiento de software.
          </Paragraph>
        </JobBox>
        <JobBox>
          <img src={AeroLogo} alt="Logo de empresa Aero"/>
          <Text size={18}>Desarrollador Full Stack</Text>
          <Text size={14} featured>17/07/2017 a la actualidad</Text>
          <Paragraph>
            Elicitación de requerimientos. Análisis técnico/funcional. 
            Documentación. Modelado e implementación de bases de datos. 
            Elaboración de prototipos. Programación de soluciones. Testing. 
            Mantenimiento de software. Desarrollo back-end Ruby On Rails. 
            Desarrollo front-end ReactJS.
          </Paragraph>
        </JobBox>
      </JobsContainer>
    </Container>
  </Section>
}

export default Experience
