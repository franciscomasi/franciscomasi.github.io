// Dependencies
import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import Text from 'components/Texts/Text'
import { PROJECT_LIST } from 'constants/ProyectList'
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

const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  position: absolute;

  a {
    color: #fff;
    margin-top: 20px;
    text-decoration: none;
  }
`

function Projects() {
  const [showDescription, setShowDescription] = useState(null)

  return <Section id='section-proyects'>
    <Container align='center' col>
      <SectionTitle first='Mis' second='proyectos' />
      <ProjectsContainer>
        {PROJECT_LIST.map(project => {
          return <Project
            key={`project-${project.name}`}
            onMouseEnter={() => setShowDescription(project.name)}
            onMouseLeave={() => setShowDescription(null)}
          >
            {projectImage(project.name)}
            {
              showDescription === project.name && <Description>
                <Text color='#fff' size={24}>{project.name}</Text>
                {project.link && <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon='link' />&nbsp;
                  <Text color='#fff'>Ver proyecto</Text>
                </a>}
              </Description>
            }
          </Project>
        })}
      </ProjectsContainer>
    </Container>
  </Section>
}

export default Projects
