import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StSpan = styled.span`
  color: ${props => props.color};
  font-size: ${props => `${props.size}px`};
  font-weight: 500;

  ${props => props.featured && `
    color: #6317e2;
    font-weight: 600;
  `};
`

function Text(props) {
  return <StSpan {...props} />
}

Text.propTypes = {
  color: PropTypes.string,
  feature: PropTypes.bool,
  size: PropTypes.number
}

Text.defaultProps = {
  color: '#181818',
  featured: false,
  size: 16
}

export default memo(Text)
