// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import initFontAwesome from 'utils/InitFontAwesome'
import Header from 'components/Sections/Header'
import Hello from 'components/Sections/Hello'
import Resume from 'components/Sections/Resume'
import Skills from 'components/Sections/Skills'
import Experience from 'components/Sections/Experience'
import Trainings from 'components/Sections/Trainings'
import Projects from 'components/Sections/Projects'
import Footer from 'components/Sections/Footer'

const AppContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

initFontAwesome()

function App() {
  return <AppContainer>
    <Header />
    <Hello />
    <Resume />
    <Skills />
    <Experience />
    <Trainings />
    <Projects />
    <Footer />
  </AppContainer>
}

export default App
