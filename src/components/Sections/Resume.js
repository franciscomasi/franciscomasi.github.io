// Dependencies
import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import { Container } from 'components/Shared/AppStyle'
import Paragraph from 'components/Texts/Paragraph'
import Text from 'components/Texts/Text'
import GradientButton from 'components/Buttons/GradientButton'
import Profile from 'assets/images/profile/profile.jpg'
import { TABLET } from 'constants/ScreenSizes'
import { cv } from 'helpers/Documents'

const Section = styled.section`
  padding: 60px 0;
  width: 100%;
`

const ProfileImage = styled.div`
  img {
    border-radius: 8px;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.15);
    display: none;
    margin-right: 15px;
    max-height: 400px;
  }

  @media all and (${TABLET}) {
    img {
      display: flex;
    }
  }
`

const Information = styled.div`
  max-width: 500px;
`

function Resume() {
  const initialYear = moment([2014, 10, 1])
  const dateNow = moment()
  const expirience = dateNow.diff(initialYear, 'year')

  function openFile() {
    window.open(cv(), '_blank')
  }

  return <Section id='section-resume'>
    <Container align='center' justify='space-around'>
      <ProfileImage>
        <img src={Profile} alt='Foto de perfil de francisco masi' />
      </ProfileImage>
      <Information>
        <Paragraph size={20}>
          <Text size={20} featured>Soy un desarrollador Full Stack</Text> con más de&nbsp;
          {expirience} años de experiencia utilizando tecnologías como 
          Symfony, Ruby On Rails y ReactJS.
        </Paragraph>
        <Paragraph>
          Durante estos años fuí responsable en todo el ciclo de vida de 
          desarrollo, en etapas como relevamiento y definición de requerimientos, 
          diseño y arquitectura del sistema, modelado de datos, programación, 
          testing e implementación y despliegue.
        </Paragraph>
        <GradientButton handleOnClick={openFile}>
          <FontAwesomeIcon icon='download' />&nbsp;
          <Text color={'#ffffff'} size={14}>
            Descargar CV
          </Text>
        </GradientButton>
      </Information>
    </Container>
  </Section>
}

export default Resume
