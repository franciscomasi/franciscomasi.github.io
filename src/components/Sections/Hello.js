// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import { Container } from 'components/Shared/AppStyle'
import Text from 'components/Texts/Text'

const Section = styled.section`
  background: linear-gradient(to right, rgb(89, 141, 233), rgb(51, 41, 209));
  padding: 60px 0;
  width: 100%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    &:first-child {
      margin-bottom: 20px;
    }
  }
`

const ContactButton = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
`

function Hello() {
  return <Section>
    <Container>
      <Description>
        <Text color={'#fff'} size={30}>Francisco Masi</Text>
        <Text color={'#fff'}>Desarrollador full-stack</Text>
        <ContactButton>
          <Text>Contactame</Text>
        </ContactButton>
      </Description>
      <div>
        <img src="" alt=""/>
      </div>
    </Container>
  </Section>
}

export default Hello
