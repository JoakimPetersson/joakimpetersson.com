import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const TopBar = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  margin-right: 20px;
  margin-top: 20px;
  gap: 10px;
`

const PageLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgray;
  }
`

function Navbar() {
  return (
    <TopBar>
      <PageLink to="">Resume</PageLink>
      <PageLink to="/games">Games</PageLink>
      <PageLink to="">Music</PageLink>
      <PageLink to="">Contact</PageLink>
    </TopBar>
  )
}

export default Navbar
