import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import Img from 'gatsby-image'

const SecondPage = ({data}) => (
  <Layout>
    <Seo title="Cards" />
    <div className="Cards-Landing p-l-40 p-r-40 m-l-40 m-r-40">
      <h1 className="ellipse">CARDS</h1>
      <div className="Grid--products Products">
      <a 
            href="https://www.etsy.com/listing/1074317672/birthday-bunny-greeting-card?click_key=e4167159bed2cc7a625c46c39b850be8dbaadf27%3A1074317672&click_sum=ec285b23&ref=shop_home_active_8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="u-textCenter item">
              <Img 
                  fluid={data.missyouGatsbyImage.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                  alt="blue birthday card"
              />
              <p className="txt-bold p-t-8">Miss You Card</p>
            </div>
        </a>

        <a 
            href="https://www.etsy.com/listing/1074317672/birthday-bunny-greeting-card?click_key=e4167159bed2cc7a625c46c39b850be8dbaadf27%3A1074317672&click_sum=ec285b23&ref=shop_home_active_8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="u-textCenter item">
              <Img 
                  fluid={data.missyouGatsbyImage.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                  alt="blue birthday card"
              />
              <p className="txt-bold p-t-8">Take Care Greeting Card</p>
            </div>
        </a>



      </div>
    </div>
  </Layout>
)

export default SecondPage


//image queries
export const query = graphql`
  query {
    missyouGatsbyImage: file(relativePath: {eq: "missyou_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    missyouGatsbyImage: file(relativePath: {eq: "missyou_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
`