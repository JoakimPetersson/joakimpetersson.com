import React from "react"
import styled from "styled-components"

const TopBar = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
`

function Navbar() {
  return (
    <TopBar>
      <div>Navbar</div>
    </TopBar>
  )
}

export default Navbar
