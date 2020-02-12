import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/info";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
    img={data.img.childImageSharp.fluid}
    title="Coffee Shop"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "coffee-bg.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default IndexPage
