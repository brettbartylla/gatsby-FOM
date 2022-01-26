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
          href="https://www.etsy.com/listing/1073453475/love-bunny-greeting-card?click_key=d2b82630104b02fd0a990f87a3f0ebc8257255ae%3A1073453475&click_sum=ecda359b&ref=shop_home_active_9"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.rabbitGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="rabbit cards"
            />
            <p className="txt-bold p-t-8">Love Bunny Greeting Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1074317672/birthday-bunny-greeting-card?click_key=e4167159bed2cc7a625c46c39b850be8dbaadf27%3A1074317672&click_sum=ec285b23&ref=shop_home_active_8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.blueBdayGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="blue birthday card"
            />
            <p className="txt-bold p-t-8">Birthday Bunny Greeting Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1083589220/fungi-forest-greeting-card?click_key=933524719151f546f104f56f0446cc1f1aa58ba3%3A1083589220&click_sum=f76376fc&ref=shop_home_active_7"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.shroomGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="mushroom cards"
            />
            <p className="txt-bold p-t-8">Fungi Forrest Greeting Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1074317672/birthday-bunny-greeting-card?click_key=e4167159bed2cc7a625c46c39b850be8dbaadf27%3A1074317672&click_sum=ec285b23&ref=shop_home_active_8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.redBdayGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="red birthday card"
            />
            <p className="txt-bold p-t-8">Birthday Bunny Greeting Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1076177357/so-happy-greeting-card?click_key=b8c41556124b208bc77fee074359e41e882f5ed9%3A1076177357&click_sum=a9cc17c2&ref=shop_home_active_10"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.happyGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="happy cards"
            />
            <p className="txt-bold p-t-8">So Happy Greeting Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1113779186/party-animal-holiday-greeting-card?click_key=907101fbbfeea7c7a96169567266d2a44dd4cd40%3A1113779186&click_sum=275dace2&ref=shop_home_recs_8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.xmasGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="christmas cards"
            />
            <p className="txt-bold p-t-8">Party Animal Holiday Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1107578803/im-a-mummy-halloween-card?click_key=73459306d7b181446ce8a33a40d70591b26f49e9%3A1107578803&click_sum=20bbe023&ref=shop_home_active_4"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.mummyGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="mummy cards"
            />
            <p className="txt-bold p-t-8">I'm a Mummy Halloween Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1101647771/im-a-ghost-halloween-card?click_key=92e238f5a7a064231b2c54f1f3e84835adead934%3A1101647771&click_sum=1e69cfe8&ref=shop_home_active_5"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.ghostGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="ghost cards"
            />
            <p className="txt-bold p-t-8">I'm a Ghost Halloween Card</p>
          </div>
        </a>
        <a 
          href="https://www.etsy.com/listing/1086302500/im-a-witch-halloween-card?click_key=129da5250dd5511cc00434a92eb15dd88d758796%3A1086302500&click_sum=8910a00e&ref=shop_home_active_6"
          target="_blank"
          rel="noreferrer"
        >
          <div className="u-textCenter item">
            <Img 
                fluid={data.witchGatsbyImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt="witch cards"
            />
            <p className="txt-bold p-t-8">I'm a Witch Halloween Card</p>
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
    rabbitGatsbyImage: file(relativePath: {eq: "rabbit_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    shroomGatsbyImage: file(relativePath: {eq: "shroom_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    xmasGatsbyImage: file(relativePath: {eq: "xmas_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    witchGatsbyImage: file(relativePath: {eq: "witch_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    redBdayGatsbyImage: file(relativePath: {eq: "red_bday_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    blueBdayGatsbyImage: file(relativePath: {eq: "blue_bday_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    mummyGatsbyImage: file(relativePath: {eq: "mummy_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    ghostGatsbyImage: file(relativePath: {eq: "ghost_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    happyGatsbyImage: file(relativePath: {eq: "happy_card.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
`