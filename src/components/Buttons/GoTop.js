import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledButton = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.15);
  color: #6c23e0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  height: 70px;
  margin-left: -30px;
  position: absolute;
  top: -35px;
  width: 60px;
`

function GoTop() {
  function handleOnClick() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })
  }

  return <StyledButton onClick={handleOnClick}>
    <FontAwesomeIcon icon='long-arrow-alt-up' />
  </StyledButton>
}

export default GoTop
