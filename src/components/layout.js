/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./Navbar/Navbar"
import "./sass/styles.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
    <>
    <Navbar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: ``,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <p className="m-t-10 m-b-0">© {new Date().getFullYear()}, all rights reserved <a href="https://www.brettbartylla.dev" target="_blank" rel="noreferrer" className="u-txtUnderline">brettbartylla.dev</a></p>
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
