// Dependencies
import React from 'react'
import styled from 'styled-components'

const AppHeader = styled.header`
  background: linear-gradient(to right, rgb(89, 141, 233), rgb(51, 41, 209));
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin: 0 60px;
  padding: 12px;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`

function Header() {
  return <AppHeader>
    <Container>
      <span>Francisco Masi</span>
      <Menu>
        <span>Home</span>
        <span>Sobre mi</span>
        <span>Habilidades</span>
        <span>Experiencia</span>
        <span>Proyectos</span>
      </Menu>
    </Container>
  </AppHeader>
}

export default Header
