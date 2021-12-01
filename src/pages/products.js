import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Products" />
    <h1>Products</h1>
    <p>Welcome to page 2</p>
    {/* <Link to="/">Go back to the homepage</Link> */}


    {/* turn into component later */}
    <button className="Button--primary u-block m-b-10">primary</button>
    <button className="Button--secondary u-block">secondary</button>
  </Layout>
)

export default SecondPage
