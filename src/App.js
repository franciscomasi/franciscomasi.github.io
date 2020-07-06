// Dependencies
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

// Components
import initFontAwesome from 'utils/InitFontAwesome'
import Header from 'components/Sections/Header'
import Hello from 'components/Sections/Hello'
import Resume from 'components/Sections/Resume'
import Skills from 'components/Sections/Skills'
import Experience from 'components/Sections/Experience'
import Trainings from 'components/Sections/Trainings'
import Projects from 'components/Sections/Projects'
import Interests from 'components/Sections/Interests'
import Footer from 'components/Sections/Footer'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    overflow-x:hidden 
  } 
`

const AppContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

initFontAwesome()

function App() {
  return <AppContainer>
    <GlobalStyle />
    <Header />
    <Hello />
    <Resume />
    <Skills />
    <Experience />
    <Trainings />
    <Projects />
    <Interests />
    <Footer />
  </AppContainer>
}

export default App
