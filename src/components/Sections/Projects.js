// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import { PROJECTS } from 'constants/Proyects'
import { projectImage } from 'helpers/Images'

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Project = styled.div`
  border-radius: 8px;
  margin: 5px;

  /* Animacion */
  background: #000;
  background: linear-gradient(135deg, #000000 0%,#000000 25%,#1e539e 50%,#17c7e2 75%,#3329d1 100%);
  background-size: 400% 400%;
  background-repeat: no-repeat;
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  cursor: pointer;
  transition: .5s all;

  &:hover {
    background-position: 100% 100%;

    img {
      opacity: 0.5;
    }
  }

  img {
    border-radius: 8px;
    max-height: 300px;
    mix-blend-mode: screen;
  }
`

function Projects() {
  return <Section>
    <Container align='center' col>
      <SectionTitle first='Mi' second='portfolio' />
      <ProjectsContainer>
        {PROJECTS.map(project => {
          return <Project>
            {projectImage(project.name)}
          </Project>
        })}
      </ProjectsContainer>
    </Container>
  </Section>
}

export default Projects
