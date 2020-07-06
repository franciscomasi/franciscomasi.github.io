// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import Text from 'components/Texts/Text'
import Paragraph from 'components/Texts/Paragraph'
import { INTEREST_LIST } from 'constants/InterestList'
import { DESKTOP } from 'constants/ScreenSizes'
import { interestImage } from 'helpers/Images'

const InterestsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const Interest = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.15);
  color: #181818;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  height: 150px;
  position: relative;
  margin: 15px;
  width: 300px;

  img {
    border-radius: 8px;
    height: inherit;
  }

  @media all and (${DESKTOP}) {
    height: 200px;
    width: 400px;
  }
`

const Resume = styled.div`
  padding: 0 10px;
  position: absolute;
  top: 0;
`

const Overlay = styled.div`
  background: rgba(30, 83, 158, 0.8);
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

function Interests() {
  return <Section id='section-interests'>
    <Container align='center' col>
      <SectionTitle first='Mis' second='intereses y hobbies' />
      <InterestsContainer>
        {
          INTEREST_LIST.map(interest => {
            return <Interest>
              <Overlay />
              {interestImage(interest.image)}
              <Resume>
                <Text color='#fff'>{interest.name}</Text>
                <Paragraph color='#fff'>{interest.resume}</Paragraph>
              </Resume>
            </Interest>
          })
        }
      </InterestsContainer>
    </Container>
  </Section>
}

export default Interests
