// Dependencies
import React from 'react'
import styled from 'styled-components'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import JobBox from './JobBox'
import { JOB_LIST } from 'constants/Jobs'

const JobsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

function Experience() {
  return <Section id='section-experience'>
    <Container align='center' col>
      <SectionTitle first='Mi' second='experiencia' />
      <JobsContainer>
        {
          JOB_LIST.map(job => <JobBox
            key={`job-${job.image}`}
            image={job.image}
            position={job.position}
            date={job.date}
            description={job.description}
          />)
        }
      </JobsContainer>
    </Container>
  </Section>
}

export default Experience
