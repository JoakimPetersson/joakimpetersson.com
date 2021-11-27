import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

function BackgroundSection({ className, children }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "space.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor="#040e18"
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: scroll;
`

export default StyledBackgroundSection
