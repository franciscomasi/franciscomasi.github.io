import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StButton = styled.button`
  background: linear-gradient(90deg, rgba(51,41,209,1) 25%, rgba(81,122,228,1) 70%);
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  padding: 12px 15px;
`

function GradientButton(props) {
  return <StButton onClick={props.handleOnClick}>
    {props.children}
  </StButton>
}

GradientButton.propTypes = {
  handleOnClick: PropTypes.func
}

export default memo(GradientButton)
