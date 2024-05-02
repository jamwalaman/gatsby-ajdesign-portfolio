import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const page = data.homePage
  const ctabtns = page.frontmatter.ctabtns

  return (
    <Layout location={location} title={siteTitle}>
      <div className='welcome'>
        <h1 dangerouslySetInnerHTML={{ __html: page.frontmatter.welcome }} />
        <div className='ctabtns'>
          {ctabtns.map(btn => {
            return (
              <Link to={btn.link} key={btn.link}>{btn.displaytext}</Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    homePage: markdownRemark(fields: { slug: { eq: "/home/" } }) {
      html
      frontmatter {
        title
        welcome
        ctabtns {
          displaytext
          link
        }
      }
    }
  }
`
