// Dependencies
import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

// Components
import { Container } from 'components/Shared/AppStyle'
import Paragraph from 'components/Texts/Paragraph'
import Text from 'components/Texts/Text'
import GradientButton from 'components/Buttons/GradientButton'

const Section = styled.section`
  padding: 60px 0;
  width: 100%;
`

function Resume() {
  const initialYear = moment([2014, 10, 1])
  const dateNow = moment()
  const expirience = dateNow.diff(initialYear, 'year')

  return <Section id='section-resume'>
    <Container>
      <div>
        <img src="" alt=""/>
      </div>
      <div>
        <Paragraph>
          <Text featured>Soy un desarrollador Full Stack</Text> con más de&nbsp;
          {expirience} años de experiencia utilizando tencologías como 
          Symfony, Ruby On Rails y ReactJS.
        </Paragraph>
        <Paragraph>
          Durante estos años fuí responsable en todo el ciclo de vida de 
          desarrollo, en etapas como relevamiento y definición de requerimientos, 
          diseño y arquitectura del sistema, modelado de datos, programación, 
          testing e implementación y despliegue.
        </Paragraph>
        <GradientButton>
          <Text color={'#ffffff'} size={14}>
            Descargar CV
          </Text>
        </GradientButton>
      </div>
    </Container>
  </Section>
}

export default Resume
