import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const page = data.aboutPage

  return (
    <Layout location={location} title={siteTitle}>
      <p>{page.frontmatter.title}</p>
      <section
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
    </Layout>
  )
}

export default ContactPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contact me" />

export const pageQuery = graphql`
  {

    site {
      siteMetadata {
        title
      }
    }
    aboutPage: markdownRemark(fields: { slug: { eq: "/contact/" } }) {
      html
      frontmatter {
        title
      }
    }

  }
`
