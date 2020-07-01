// Dependencies
import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import { Container, Section } from 'components/Shared/AppStyle'
import SectionTitle from 'components/Texts/SectionTitle'
import { SKILL_LIST } from 'constants/SkillList'
import {
  ALL,
  FRONT_END,
  BACK_END,
  LANGUAGES,
  FRAMEWORKS,
  ARCHITECTURE,
  VCS,
  MANAGEMENT
} from 'constants/Categories'

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1000px;
`

const Skill = styled.div`
  background: linear-gradient(90deg, rgb(87, 0, 207) 20%, rgb(100, 66, 229) 60%);
  border-radius: 20px;
  color: #ffffff;
  font-size: 14px;
  padding: 12px;
  margin: 5px 5px;
`

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #00f;
  margin-bottom: 20px;
  max-width: 1000px;
  padding: 10px;
  width: 100%;  
`

const FilterButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: ${props => props.selected && '2px solid #00f'};
  color: ${props => props.selected && '#00f'};
  cursor: pointer;
  outline: none;
`

const CATEGORIES = [
  ALL,
  FRONT_END,
  BACK_END,
  LANGUAGES,
  FRAMEWORKS,
  ARCHITECTURE,
  VCS,
  MANAGEMENT
]

function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('todas')
  const filteredSkills = selectedFilter !== 'todas'
    ? SKILL_LIST.filter(skill => skill.category.includes(selectedFilter))
    : SKILL_LIST

  return <Section>
    <Container align='center' col>
      <SectionTitle first='Mis' second='habilidades' />
      <Filters>
        {
          CATEGORIES.map(filter => {
            return  <FilterButton
              onClick={() => setSelectedFilter(filter)}
              selected={filter === selectedFilter}
            >
              {filter}
            </FilterButton>
          })
        }
      </Filters>
      <SkillContainer>
        {
          filteredSkills.map(skill => {
            return <Skill key={`skill-${skill.text}`}>{skill.text}</Skill>
          })
        }
      </SkillContainer>
    </Container>
  </Section>
}

export default Skills
