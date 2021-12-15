import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import Img from 'gatsby-image'
import cardGif from '../images/cards.gif'
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
            className="cardImg"
          />
          <div className="img-top">
            <h2 className="u-posAbsolute">cards</h2>
            <video controls width="250" aria-hidden="true" controls="false" loop>
              <source src={cardVid} type="video/mp4" />
            </video>
          </div>

          {/* <img src={cardGif} alt="Logo" className="img-top"/> */}
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
              fluid={data.cardGatsbyImage.childImageSharp.fluid}
              alt="Handmade cards"
              className="cardImg"
            />
            <div className="img-top">
              <h2 className="u-posAbsolute">apparel</h2>
              <video controls width="250" aria-hidden="true" controls="false" loop>
                <source src={clothesVid} type="video/mp4" />
              </video>
              {/* <img src={cardGif} alt="Logo" className="img-top"/> */}
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
    cardGatsbyImage: file(relativePath: {eq: "cards.png"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  },
`