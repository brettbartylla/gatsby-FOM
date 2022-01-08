import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import Img from 'gatsby-image'
import cardVid from '../video/cards_hover.mp4'
import clothesVid from '../video/clothes_hover.mp4'


//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />

    <div className="Grid--landing">
      {/* left col */}
      <div>
      <Link to="/cards/">
        <div className="imgFlip">
          <Img 
            fluid={data.cardGatsbyImage.childImageSharp.fluid}
            alt="Handmade cards"
            className="cardImg m-x-40"
          />
          <div className="img-top card m-x-40">
            <h1 className="u-posAbsolute ellipse u-posAbsolute">CARDS</h1>
            <video muted autoPlay loop id="cardVideo" width="250" aria-hidden="true">
              <source src={cardVid} type="video/mp4" />
            </video>
          </div>
        </div>
      </Link>
      </div>
      {/* middle col */}
      {/* <div>
        <Img 
          fluid={data.cardGatsbyImage.childImageSharp.fluid}
          alt="Handmade cards"
        />
      </div> */}
      {/* right col */}
      <div>
        <Link to="/cards/">
          <div className="imgFlip">
            <Img 
              fluid={data.clothesGatsbyImage.childImageSharp.fluid}
              alt="Handmade cards"
              className="cardImg"
            />
            <div className="img-top apparel">
              <h1 className="u-posAbsolute apparel ellipse u-posAbsolute">APPAREL</h1>
              <video muted autoPlay loop id="apparelVideo" width="250" aria-hidden="true">
                <source src={clothesVid} type="video/mp4" />
              </video>
            </div>
          </div>
        </Link>
      </div>

    </div>
  </Layout>
)

export default IndexPage


//image queries
export const query = graphql`
  query {
    cardGatsbyImage: file(relativePath: {eq: "cards.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    clothesGatsbyImage: file(relativePath: {eq: "clothes.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  },
`