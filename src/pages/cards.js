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
        href="https://www.etsy.com/listing/1217721412/thank-you-greeting-card?click_key=96d9b2da4ec79499be72904d95a54e0a8822d81b%3A1217721412&click_sum=005444f1&ref=shop_home_active_3"
        target="_blank"
        rel="noreferrer"
      >
        <div className="u-textCenter item">
          <Img 
            fluid={data.thankYouGatsbyImage.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt="Thank You Greeting Card"
          />
          <p className="txt-bold p-t-8">Thank You Greeting Card</p>
        </div>
      </a>

      <a 
        href="https://www.etsy.com/listing/1217719946/thinking-of-you-greeting-card?click_key=6660e0a4386ebef871cabe194ad8a6459ce89ecd%3A1217719946&click_sum=ea67f2ca&ref=shop_home_active_2 "
        target="_blank"
        rel="noreferrer"
      >
        <div className="u-textCenter item">
          <Img 
            fluid={data.thinkingOfYouGatsbyImage.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt="Thinking Of You Greeting Card"
          />
          <p className="txt-bold p-t-8">Thinking Of You Greeting Card</p>
        </div>
      </a>

      <a 
        href="https://www.etsy.com/listing/1216661769/i-miss-you-greeting-card-pack?click_key=1d728241e9b4829e240f9db4a99242faf9de4f3c%3A1216661769&click_sum=47949db3&ref=shop_home_active_5"
        target="_blank"
        rel="noreferrer"
      >
        <div className="u-textCenter item">
          <Img 
            fluid={data.missyouGatsbyImage.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt="I Miss You Greeting Card"
          />
          <p className="txt-bold p-t-8">I Miss You Greeting Card</p>
        </div>
      </a>

      <a 
        href="https://www.etsy.com/listing/1199718030/take-care-greeting-card-pack?click_key=edc599ff3730cb335663dd726f36006e2477a52e%3A1199718030&click_sum=42850346&ref=shop_home_active_4"
        target="_blank"
        rel="noreferrer"
      >
        <div className="u-textCenter item">
          <Img 
            fluid={data.takeCareGatsbyImage.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt="ake Care Greeting Card"
          />
          <p className="txt-bold p-t-8">Take Care Greeting Card</p>
        </div>
      </a>


      <a 
        href="https://www.etsy.com/listing/1209924710/happy-birthday-greeting-card?click_key=6d41567ff3faccd85d4963c1fdf21e6d68c9625d%3A1209924710&click_sum=b0262d5e&ref=shop_home_active_1"
        target="_blank"
        rel="noreferrer"
      >
        <div className="u-textCenter item">
          <Img 
            fluid={data.birthdayGatsbyImage.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt=" Happy Birthday Greeting Card"
          />
          <p className="txt-bold p-t-8">Happy Birthday Greeting Card</p>
        </div>
      </a>
      <a 
        href="https://www.etsy.com/listing/1073453475/love-bunny-greeting-card-pack?click_key=eb8d5eb01d6266dec8d5e8ffb144f4d36b99e965%3A1073453475&click_sum=949035aa&ref=shop_home_active_8"
        target="_blank"
        rel="noreferrer"
      >
        <div className="u-textCenter item">
          <Img 
            fluid={data.bunnyGatsbyImage.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt="Bunny Bunny Greeting Card"
          />
          <p className="txt-bold p-t-8">Bunny Bunny Greeting Card</p>
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
    thankYouGatsbyImage: file(relativePath: {eq: "thank_you_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    thinkingOfYouGatsbyImage: file(relativePath: {eq: "thinking_of_you_card.webp"}) {
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
    },
    takeCareGatsbyImage: file(relativePath: {eq: "take_care_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    birthdayGatsbyImage: file(relativePath: {eq: "happy_brithday_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    bunnyGatsbyImage: file(relativePath: {eq: "bunny_bunny_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
`