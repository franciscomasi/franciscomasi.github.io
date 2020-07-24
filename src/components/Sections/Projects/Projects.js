// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import ProjectBox from './ProjectBox'
import { PROJECT_LIST } from 'constants/ProyectList'

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

function Projects() {
  return <Section id='section-proyects'>
    <Container align='center' col>
      <SectionTitle first='Mis' second='proyectos' />
      <ProjectsContainer>
        {PROJECT_LIST.map(project => {
          return <ProjectBox
            key={`project-${project.name}`}
            link={project.link}
            name={project.name}
          />
        })}
      </ProjectsContainer>
    </Container>
  </Section>
}

export default Projects
