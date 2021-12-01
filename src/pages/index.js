import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import myImage_1 from "../images/gatsby-astronaut.png"

//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />

    <div className="Grid--landing">
      {/* left col */}
      <div>
        <Img 
          fluid={data.cardGatsbyImage.childImageSharp.fluid}
          alt="Handmade cards"
        />
      </div>
      {/* middle col */}
      <div>
        <Img 
          fluid={data.cardGatsbyImage.childImageSharp.fluid}
          alt="Handmade cards"
        />
      </div>
      {/* right col */}
      <div>
        <Img 
          fluid={data.cardGatsbyImage.childImageSharp.fluid}
          alt="Handmade cards"
        />
      </div>

    </div>

    {/* <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/page-2/">PRODUCTS</Link> </li>
    </ul> */}

      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
    
  </Layout>
)

export default IndexPage


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