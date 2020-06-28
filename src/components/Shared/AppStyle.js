import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.col ? 'column' : 'row'};
  align-items: ${props => props.align || 'flex-start'};
  margin: 0 60px;
`
