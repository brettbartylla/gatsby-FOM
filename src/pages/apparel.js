import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import Img from 'gatsby-image'

const SecondPage = ({data}) => (
  <Layout>
    <Seo title="Apparel" />
    <div className="Cards-Landing p-l-40 p-r-40 m-l-40 m-r-40">
      <h1 className="ellipse">APPAREL</h1>
      <div className="Grid--products Products">
        <a 
          href="https://www.etsy.com/listing/1114572567/bunny-bunny-handmade-tote-bag-no-waste?click_key=3c060c29852c0c51e8bfb70c038baf41c5372e51%3A1114572567&click_sum=c9ed6a4b&ref=shop_home_feat_2"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.toteBagGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="bunny bunny tote bag"
            />
            <p className="txt-bold p-t-10">Bunny Bunny Tote Bag</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1136564387/take-care-long-sleeve-heavy-cotton-shirt?click_key=f39b7c4fa13b0ca6aa67650175ebb7b83eb958c7%3A1136564387&click_sum=d14dcba2&ref=shop_home_feat_1&variation0=2387384391"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.longGreenTeeGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="take care long sleeve tee, green"
            />
            <p className="txt-bold p-t-10">Take Care Long Sleeve Tee, Green</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1136564387/take-care-long-sleeve-heavy-cotton-shirt?click_key=f39b7c4fa13b0ca6aa67650175ebb7b83eb958c7%3A1136564387&click_sum=d14dcba2&ref=shop_home_feat_1&variation0=2387384391"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.longWhiteTeeGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="take care long sleeve tee, white"
            />
            <p className="txt-bold p-t-10">Take Care Long Sleeve Tee, White</p>
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
    toteBagGatsbyImage: file(relativePath: {eq: "tote_bag.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    longGreenTeeGatsbyImage: file(relativePath: {eq: "long_sleeve_green_tee.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    longWhiteTeeGatsbyImage: file(relativePath: {eq: "long_sleeve_white_tee.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
`