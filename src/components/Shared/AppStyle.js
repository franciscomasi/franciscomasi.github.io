import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.col ? 'column' : 'row'};
  align-items: ${props => props.align || 'flex-start'};
  margin: 0 20px;

  ${props => props.justify && `
    justify-content: ${props.justify};
  `}

  @media all and (min-width: 700px) {
    margin: 0 40px;
  }

  @media all and (min-width: 960px) {
    margin: 0 60px;
  }
`

export const Section = styled.section`
  padding: 100px 0;
  width: 100%;
`

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

export default GlobalStyle