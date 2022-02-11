import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

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
      <div className="cards-pad border-btm">
        <Link to="/cards/">
          <div className="imgFlip">
            <Img 
              fluid={data.cardGatsbyImage.childImageSharp.fluid}
              alt="Handmade cards"
              className="cardImg"
            />
            <div className="img-top card videoContainer">
              <h1 className="u-posAbsolute ellipse u-posAbsolute neg-top">CARDS</h1>
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
        <Link to="/apparel/">
          <div className="imgFlip border-btm">
            <Img 
              fluid={data.clothesGatsbyImage.childImageSharp.fluid}
              alt="Handmade cards"
              className="cardImg"
            />
            <div className="img-top apparel videoContainer">
              <h1 className="u-posAbsolute apparel ellipse u-posAbsolute">APPAREL</h1>
              <video muted autoPlay loop id="apparelVideo" width="250" aria-hidden="true">
                <source src={clothesVid} type="video/mp4" />
              </video>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <p className="p-l-30 p-r-30 u-textCenter">
      Friends Of Mine is a sustainably conscious stationery and apparel brand founded by two friends, Claire Loes and Garance Rousseau. 
      <br />
      FOM products are designed and made by hand in Minneapolis and Los Angeles.
      <ul className="p-t-15 social-list">
        <li className="u-inlineBlock">
          <a href="https://www.instagram.com/byfriendsofmine/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="u-inlineBlock">
          <a href="mailto:by.friendsofmine@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </a>
        </li>
      </ul>
    </p>
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