import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import React, { Fragment } from 'react'
import HowToUse from '../components/Templates/HowToUse'

const HowToUsePage: React.SFC<HowToUsePageProps> = props => (
  <HowToUse
    fluid1={props.data.afterLogin.childImageSharp.fluid}
    fluid2={props.data.afterLogin.childImageSharp.fluid}
  />
)

export default HowToUsePage

interface HowToUsePageProps {
  data: {
    afterLogin: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

// As defined in gatsby-config.js, file path is relative to ${__dirname}/src/images
export const fluidImages = graphql`
  {
    afterLogin: file(relativePath: { eq: "howtouse/after-login.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
