import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components
import Text from './Text'

const StSectionTitle = styled.div`
  margin-bottom: 20px;
`

function SectionTitle({ first, second}) {
  return <StSectionTitle>
    <Text size={30}>{first}</Text>&nbsp;
    <Text size={30} featured>{second}</Text>
  </StSectionTitle>
}

SectionTitle.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired
}

export default memo(SectionTitle)
