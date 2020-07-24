// Dependencies
import React, { memo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import Text from 'components/Texts/Text'
import { projectImage } from 'helpers/Images'

const Project = styled.div`
  border-radius: 8px;
  margin: 5px;

  /* Animacion */
  background: #000;
  background: linear-gradient(135deg, #000000 0%,#000000 25%,#1e539e 50%,#17c7e2 75%,#3329d1 100%);
  background-size: 400% 400%;
  background-repeat: no-repeat;
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  transition: .5s all;

  &:hover {
    background-position: 100% 100%;

    img {
      opacity: 0.5;
    }
  }

  img {
    border-radius: 8px;
    max-height: 300px;
    mix-blend-mode: screen;
  }
`

const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  position: absolute;

  a {
    color: #fff;
    margin-top: 20px;
    text-decoration: none;
  }
`

function ProjectBox({ link, name }) {
  const [showDescription, setShowDescription] = useState(false)

  return <Project
    onMouseEnter={() => setShowDescription(true)}
    onMouseLeave={() => setShowDescription(false)}
  >
    {projectImage(name)}
    {
      showDescription && <Description>
        <Text color='#fff' size={24}>{name}</Text>
        {link && <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon='link' />&nbsp;
          <Text color='#fff'>Ver proyecto</Text>
        </a>}
      </Description>
    }
  </Project>
}

ProjectBox.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default memo(ProjectBox)
