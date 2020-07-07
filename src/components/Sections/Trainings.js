// Dependencies
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import Text from 'components/Texts/Text'
import { TRAINING_LIST } from 'constants/TrainingList'
import { DESKTOP } from 'constants/ScreenSizes'
import { TrainingIcon } from 'helpers/Icons'
import { certificate } from 'helpers/Documents'

const StContainer = styled(Container)`
  .vertical-timeline {
    &::before {
      background: #6317e2;
    }
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #6317e2, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
  }

  .vertical-timeline-element-date {
    color: #181818;
  }
`

const StTrainingIcon = styled(TrainingIcon)`
  height: 28px;

  @media all and (${DESKTOP}) {
    height: 40px;
  }
`

const StButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 15px;
  outline: none;
  padding: 10px;
`

function Trainings() {
  function openFile(filename) {
    const file = certificate(filename)
    window.open(file, '_blank')
  }

  return <Section id='section-trainings'>
    <StContainer align='center' col>
      <SectionTitle first='Mis' second='capacitaciones' />
      <VerticalTimeline className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
        {
          TRAINING_LIST.map(training => {
            return <VerticalTimelineElement
              key={`training-${training.name}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#6317e2', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #6317e2' }}
              date={training.date}
              iconStyle={{
                background: training.color,
                color: '#fff',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
              icon={<StTrainingIcon icon={training.icon} />}
            >
              <h3 className="vertical-timeline-element-title">{training.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">{training.instructor}</h4>
              <p>{training.duration}</p>
              {
                training.certificate && <StButton
                  onClick={() => openFile(training.certificate)}
                >
                  <FontAwesomeIcon icon='download' />&nbsp;
                  <Text>Ver certificado</Text>  
                </StButton>
              }
            </VerticalTimelineElement>
          })
        }
      </VerticalTimeline>
    </StContainer>
  </Section>
}

export default Trainings
