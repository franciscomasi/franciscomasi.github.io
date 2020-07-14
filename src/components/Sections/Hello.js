// Dependencies
import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import { Container } from 'components/Shared/AppStyle'
import Text from 'components/Texts/Text'
import Profile from 'assets/images/profile/profile_head.png'
import { TABLET, DESKTOP } from 'constants/ScreenSizes'
import { URL_LINKEDIN, URL_GITHUB } from 'constants/SocialNetworks'

const Section = styled.section`
  background: linear-gradient(to right, rgb(89, 141, 233), rgb(51, 41, 209));
  padding: 126px 0 60px;
  width: 100%;
`

const StContainer = styled(Container)`
  flex-direction: column;

  @media all and (${TABLET}) {
    flex-direction: row;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order: 1;
  width: 235px;

  > * {
    margin-bottom: 20px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  > * {
    margin-right: 10px;
  }
`

const ContactButton = styled.a`
  background: #fff;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 15px;
  text-decoration: none;
`

const ProfileImage = styled.div`
  order: 0;

  img {
    max-height: 200px;
  }

  @media all and (${TABLET}) {
    order: 1;
  }

  @media all and (${DESKTOP}) {
    order: 1;

    img {
      max-height: 300px;
    }
  }
`

const SocialNetwork = styled.div`
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 25px;
  padding: 10px;
  width: 25px;

  > a {
    color: #181818;
  }
`

function Hello() {
  const [contactText, setContactText] = useState('Contactame')
  const email = 'francisco.masi@hotmail.com'

  return <Section id='section-hello'>
    <StContainer align='center' justify='space-around'>
      <Description>
        <Text color={'#fff'} size={30}>Francisco Masi</Text>
        <Text color={'#fff'}>Desarrollador full-stack</Text>
        <ContactButton href={`mailto:${email}`}>
          <Text
            onMouseEnter={() => setContactText(email)}
            onMouseLeave={() => setContactText('Contactame')}
          >
            {contactText}
          </Text>
        </ContactButton>
        <FlexContainer>
          <SocialNetwork>
            <a
              href={URL_LINKEDIN}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visitá mi perfil de LinkedIn'
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </SocialNetwork>
          <SocialNetwork>
            <a
              href={URL_GITHUB}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visitá mi perfil de GitHub'
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </SocialNetwork>
        </FlexContainer>
      </Description>
      <ProfileImage>
        <img src={Profile} alt='Foto de perfil de francisco masi' />
      </ProfileImage>
    </StContainer>
  </Section>
}

export default Hello
