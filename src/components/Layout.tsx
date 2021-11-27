import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { BaseComponentProps } from "@/types"
import Background from "./Background"
import Navbar from "./Navbar"
import Title from "./Title"

const GlobalStyle = createGlobalStyle`
html,
body,
#___gatsby,
#gatsby-focus-wrapper {
  width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
    color: white; 
    font-family: Helvetica;
}
`

const Main = styled.main`
  width: 50%;
  margin: 0 auto;
`

function Layout(props: BaseComponentProps) {
  const { children } = props

  return (
    <Background className="Background">
      <GlobalStyle />
      <Navbar />
      <Main>
        <Title>Joakim Petersson</Title>
        {children}
      </Main>
    </Background>
  )
}

export default Layout
