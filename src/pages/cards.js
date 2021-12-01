import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import Img from 'gatsby-image'

const SecondPage = ({data}) => (
  <Layout>
    <Seo title="Cards" />

    <h1>Cards</h1>
    <div className="Grid--products">
    
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
      <div>
        <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
        />
      </div>
    </div>


  </Layout>
)

export default SecondPage


//image queries
export const query = graphql`
  query {
    cardGatsbyImage: file(relativePath: {eq: "cards.png"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
`