// Dependencies
import React, { memo } from 'react'
import styled from 'styled-components'

// Components
import Paragraph from 'components/Texts/Paragraph'
import Text from 'components/Texts/Text'
import { TABLET } from 'constants/ScreenSizes'
import { jobImage } from 'helpers/Images'

const Box = styled.div`
  border-radius: 8px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  margin-bottom: 10px;

  > * {
    padding: 10px 20px;

    &:first-child {
      padding: 0;
      margin-bottom: 10px;
    }
  }

  &:last-child {
    margin: 0;
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-width: calc(100%);
  }

  @media all and (${TABLET}) {
    margin-right: 30px;

    img {
      max-width: max-content;
    }
  }
`

function JobBox(props) {
  const {
    image,
    position,
    date,
    description
  } = props

  return <Box key={`job-${image}`}>
    {jobImage(image)}
    <Text size={18}>{position}</Text>
    <Text size={14} featured>{date}</Text>
    <Paragraph>{description}</Paragraph>
  </Box>
}

export default memo(JobBox)
