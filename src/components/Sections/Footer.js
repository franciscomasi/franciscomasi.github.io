import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { URL_LINKEDIN, URL_GITHUB } from 'constants/SocialNetworks'
import GoTop from 'components/Buttons/GoTop'

const AppFooter = styled.footer`
  background: linear-gradient(to right, rgb(89, 141, 233), rgb(51, 41, 209));
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 140px;
  position: relative;
  width: 100%;
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`


const SocialNetwork = styled.div`
  background: #6c23e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 25px;
  padding: 10px;
  width: 25px;

  > a {
    color: #fff;
  }
`

function Footer() {
  return <AppFooter>
    <div>
      <GoTop />
    </div>
    <SocialLinks>
      <SocialNetwork>
        <a href={URL_LINKEDIN} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
      </SocialNetwork>
      <SocialNetwork>
        <a href={URL_GITHUB} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </SocialNetwork>
    </SocialLinks>
  </AppFooter>
}

export default Footer
