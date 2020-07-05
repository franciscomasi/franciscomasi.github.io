import styled from 'styled-components'

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