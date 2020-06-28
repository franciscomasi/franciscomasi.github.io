// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import Header from 'components/Sections/Header'
import Hello from 'components/Sections/Hello'
import Resume from 'components/Sections/Resume'
import Skills from 'components/Sections/Skills'

const AppContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return <AppContainer>
    <Header />
    <Hello />
    <Resume />
    <Skills />
  </AppContainer>
}

export default App
