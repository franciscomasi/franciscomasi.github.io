import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StParagraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => `${props.size}px`};
`

function Paragraph(props) {
  return <StParagraph {...props} />
}

Paragraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

Paragraph.defaultProps = {
  color: '#181818',
  size: 16
}

export default memo(Paragraph)
