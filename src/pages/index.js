import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/info";
import Menu from "../components/home/menu";
import Products from "../components/home/products";
import Contact from "../components/home/contact";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
    img={data.img.childImageSharp.fluid}
    title="Coffee Shop"
    />
    <Info />
    <Menu items={data.menu}/>
    <Products />
    <Contact />
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
  menu: allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage
