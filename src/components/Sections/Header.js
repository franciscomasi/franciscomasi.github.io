// Dependencies
import React, { useState } from 'react'
import useWindowSize from 'hooks/useWindowSize'
import styled from 'styled-components'

// Components
import { Container } from 'components/Shared/AppStyle'
import { DESKTOP, DESKTOP_WITH, TABLET } from 'constants/ScreenSizes'

const AppHeader = styled.header`
  background: linear-gradient(to right, rgb(89, 141, 233), rgb(51, 41, 209));
  position: fixed;
  width: 100%;
  z-index: 1000;
`

const StNav = styled.nav`
  width: 100%;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;

  a {
    color: #fff;
    display: block;
    padding: 15px 5px;
    text-decoration: none;
  }

  li {
    order: 2;
    padding: 5px;
    text-align: center;
    width: 100%;

    &.my-name {
      font-size: 20px;
      order: 0;
      width: auto;
    }

    &.toggle {
      order: 1;
      font-size: 20px;
      width: auto;
    }
  }

  @media all and (${TABLET}) {
    justify-content: center;

    li {
      &.my-name {
        flex: 1;
      }

      &.toggle {
        flex: 1;
        text-align: right;
        order: 1;
      }
    }
  }

  @media all and (${DESKTOP}) {
    align-items: flex-start;     
    flex-wrap: nowrap;

    li {
      order: 1;
      position: relative;
      display: block; 
      width: auto;

      &.my-name {
        order: 0;
        text-align: left;
      }

      &.toggle {
        display: none;
      }
    }
  }
`

function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const size = useWindowSize()

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  return <AppHeader>
    <Container>
      <StNav>
        <Menu>
          <li className='my-name'><a href="#">Francisco Masi</a></li>
          {
            size.width < DESKTOP_WITH
              ? <>
                {
                  openMenu && <>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Experiencia</a></li>
                    <li><a href="#">Proyectos</a></li>
                  </>
                }
                <li className='toggle'><a href="#" onClick={toggleMenu}>##</a></li>
              </>
              : <>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre mi</a></li>
                <li><a href="#">Habilidades</a></li>
                <li><a href="#">Experiencia</a></li>
                <li><a href="#">Proyectos</a></li>
              </>
          }
        </Menu>
      </StNav>
    </Container>
  </AppHeader>
}

export default Header
