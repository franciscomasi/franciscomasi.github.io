import React from 'react'
import ProjectBox from './ProjectBox'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default {
  title: 'Project Box',
  decorators: [storyFn => <ProjectsContainer>{storyFn()}</ProjectsContainer>],
}

export const exampleProject = () => <ProjectBox
  link='https://diariodeviaje.tur.ar/'
  name='Diario de viaje'
/>
